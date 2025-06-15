
export interface ExperimentVariant {
  id: string;
  name: string;
  weight: number; // 0-100, percentage of traffic
  config?: Record<string, any>; // Additional configuration for the variant
}

export interface Experiment {
  id: string;
  name: string;
  description: string;
  status: 'draft' | 'active' | 'paused' | 'completed';
  startDate?: string;
  endDate?: string;
  variants: ExperimentVariant[];
  targetingRules?: {
    userSegments?: string[];
    trafficPercentage?: number;
  };
  metrics: {
    primary: string; // primary metric to track
    secondary?: string[]; // additional metrics
  };
}

export interface ExperimentAssignment {
  experimentId: string;
  variantId: string;
  assignedAt: string;
  userId?: string;
  sessionId: string;
}

export interface ExperimentResult {
  experimentId: string;
  variantId: string;
  metric: string;
  value: number;
  timestamp: string;
  userId?: string;
  sessionId: string;
}
