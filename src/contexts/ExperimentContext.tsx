
import React, { createContext, useContext, useEffect, useState, ReactNode } from 'react';
import { Experiment, ExperimentAssignment, ExperimentResult } from '@/types/experiments';

interface ExperimentContextType {
  assignments: Record<string, ExperimentAssignment>;
  getVariant: (experimentId: string) => string | null;
  trackConversion: (experimentId: string, metric: string, value?: number) => void;
  experiments: Experiment[];
  isLoading: boolean;
}

const ExperimentContext = createContext<ExperimentContextType | undefined>(undefined);

interface ExperimentProviderProps {
  children: ReactNode;
  experiments: Experiment[];
  userId?: string;
}

export function ExperimentProvider({ children, experiments, userId }: ExperimentProviderProps) {
  const [assignments, setAssignments] = useState<Record<string, ExperimentAssignment>>({});
  const [sessionId] = useState(() => crypto.randomUUID());
  const [isLoading, setIsLoading] = useState(true);

  // Load existing assignments from localStorage
  useEffect(() => {
    const stored = localStorage.getItem('experiment-assignments');
    if (stored) {
      try {
        setAssignments(JSON.parse(stored));
      } catch (error) {
        console.warn('Failed to parse stored experiment assignments:', error);
      }
    }
    setIsLoading(false);
  }, []);

  // Save assignments to localStorage whenever they change
  useEffect(() => {
    if (!isLoading) {
      localStorage.setItem('experiment-assignments', JSON.stringify(assignments));
    }
  }, [assignments, isLoading]);

  // Assign user to experiment variants
  const assignToExperiment = (experiment: Experiment): string => {
    // Check if user is already assigned
    const existing = assignments[experiment.id];
    if (existing) {
      return existing.variantId;
    }

    // Simple hash-based assignment for consistent results
    const hash = hashString(`${experiment.id}-${userId || sessionId}`);
    const totalWeight = experiment.variants.reduce((sum, v) => sum + v.weight, 0);
    const random = hash % totalWeight;
    
    let currentWeight = 0;
    for (const variant of experiment.variants) {
      currentWeight += variant.weight;
      if (random < currentWeight) {
        const assignment: ExperimentAssignment = {
          experimentId: experiment.id,
          variantId: variant.id,
          assignedAt: new Date().toISOString(),
          userId,
          sessionId,
        };
        
        setAssignments(prev => ({
          ...prev,
          [experiment.id]: assignment,
        }));
        
        return variant.id;
      }
    }
    
    // Fallback to first variant
    return experiment.variants[0]?.id || 'control';
  };

  const getVariant = (experimentId: string): string | null => {
    const experiment = experiments.find(e => e.id === experimentId && e.status === 'active');
    if (!experiment) return null;
    
    return assignToExperiment(experiment);
  };

  const trackConversion = (experimentId: string, metric: string, value: number = 1) => {
    const assignment = assignments[experimentId];
    if (!assignment) return;

    const result: ExperimentResult = {
      experimentId,
      variantId: assignment.variantId,
      metric,
      value,
      timestamp: new Date().toISOString(),
      userId,
      sessionId,
    };

    // Store results in localStorage for now (in production, send to analytics)
    const storedResults = localStorage.getItem('experiment-results') || '[]';
    const results = JSON.parse(storedResults);
    results.push(result);
    localStorage.setItem('experiment-results', JSON.stringify(results));

    console.log('Experiment conversion tracked:', result);
  };

  return (
    <ExperimentContext.Provider value={{
      assignments,
      getVariant,
      trackConversion,
      experiments,
      isLoading,
    }}>
      {children}
    </ExperimentContext.Provider>
  );
}

// Simple hash function for consistent user assignment
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  return Math.abs(hash);
}

export const useExperimentContext = () => {
  const context = useContext(ExperimentContext);
  if (!context) {
    throw new Error('useExperimentContext must be used within an ExperimentProvider');
  }
  return context;
};
