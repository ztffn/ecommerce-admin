
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { useExperimentContext } from '@/contexts/ExperimentContext';
import { Play, Pause, BarChart3, Settings } from 'lucide-react';

export function ExperimentManager() {
  const { experiments, assignments } = useExperimentContext();

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-green-500';
      case 'paused': return 'bg-yellow-500';
      case 'completed': return 'bg-blue-500';
      default: return 'bg-gray-500';
    }
  };

  const getResults = (experimentId: string) => {
    const storedResults = localStorage.getItem('experiment-results') || '[]';
    const results = JSON.parse(storedResults);
    return results.filter((r: any) => r.experimentId === experimentId);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">A/B Test Manager</h2>
        <Button>
          <Settings className="w-4 h-4 mr-2" />
          Create New Test
        </Button>
      </div>

      <div className="grid gap-6">
        {experiments.map((experiment) => {
          const assignment = assignments[experiment.id];
          const results = getResults(experiment.id);
          
          return (
            <Card key={experiment.id}>
              <CardHeader>
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="flex items-center gap-2">
                      {experiment.name}
                      <Badge className={getStatusColor(experiment.status)}>
                        {experiment.status}
                      </Badge>
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-1">
                      {experiment.description}
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <BarChart3 className="w-4 h-4 mr-1" />
                      Results ({results.length})
                    </Button>
                    <Button variant="outline" size="sm">
                      {experiment.status === 'active' ? (
                        <>
                          <Pause className="w-4 h-4 mr-1" />
                          Pause
                        </>
                      ) : (
                        <>
                          <Play className="w-4 h-4 mr-1" />
                          Start
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold mb-2">Variants</h4>
                    <div className="space-y-2">
                      {experiment.variants.map((variant) => (
                        <div key={variant.id} className="flex items-center justify-between p-2 bg-muted rounded">
                          <span className={`font-medium ${assignment?.variantId === variant.id ? 'text-blue-600' : ''}`}>
                            {variant.name}
                            {assignment?.variantId === variant.id && (
                              <Badge variant="outline" className="ml-2">Your variant</Badge>
                            )}
                          </span>
                          <span className="text-sm text-muted-foreground">{variant.weight}%</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Metrics</h4>
                    <div className="space-y-1">
                      <div className="text-sm">
                        <span className="font-medium">Primary:</span> {experiment.metrics.primary}
                      </div>
                      {experiment.metrics.secondary && (
                        <div className="text-sm">
                          <span className="font-medium">Secondary:</span> {experiment.metrics.secondary.join(', ')}
                        </div>
                      )}
                    </div>
                    {results.length > 0 && (
                      <div className="mt-3 p-2 bg-green-50 rounded">
                        <div className="text-sm font-medium text-green-800">
                          {results.length} conversions tracked
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
