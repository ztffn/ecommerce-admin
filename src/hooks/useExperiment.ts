
import { useExperimentContext } from '@/contexts/ExperimentContext';

export interface ExperimentHookResult {
  variant: string | null;
  isControl: boolean;
  trackConversion: (metric?: string, value?: number) => void;
  config: Record<string, any>;
}

export function useExperiment(experimentId: string, defaultMetric?: string): ExperimentHookResult {
  const { getVariant, trackConversion: contextTrackConversion, experiments } = useExperimentContext();
  
  const variant = getVariant(experimentId);
  const experiment = experiments.find(e => e.id === experimentId);
  const variantConfig = experiment?.variants.find(v => v.id === variant)?.config || {};
  
  const trackConversion = (metric?: string, value: number = 1) => {
    const metricToTrack = metric || defaultMetric || experiment?.metrics.primary || 'conversion';
    contextTrackConversion(experimentId, metricToTrack, value);
  };

  return {
    variant,
    isControl: variant === 'control' || variant === experiment?.variants[0]?.id,
    trackConversion,
    config: variantConfig,
  };
}
