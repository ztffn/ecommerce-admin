
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useExperiment } from "@/hooks/useExperiment";

const Index = () => {
  const ctaExperiment = useExperiment('landing-cta-button', 'cta_click');

  const handleCTAClick = () => {
    ctaExperiment.trackConversion();
  };

  const buttonText = ctaExperiment.config.buttonText || 'Go to Dashboard';
  const buttonClass = ctaExperiment.config.buttonClass || 'bg-primary text-primary-foreground hover:bg-primary/90';

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Webshop Analytics
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Welcome to your product profit analysis dashboard. Get insights into
          ad spend, product performance, and profit margins.
        </p>
        <Button asChild size="lg" className={buttonClass} onClick={handleCTAClick}>
          <Link to="/admin">{buttonText}</Link>
        </Button>
        {ctaExperiment.variant && (
          <p className="text-xs text-muted-foreground mt-4">
            A/B Test: {ctaExperiment.variant}
          </p>
        )}
      </div>
    </div>
  );
};

export default Index;
