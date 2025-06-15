
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center p-8 max-w-2xl mx-auto">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          SwiftFrame Analytics
        </h1>
        <p className="text-xl text-muted-foreground mb-8">
          Welcome to your product profit analysis dashboard. Get insights into
          ad spend, product performance, and profit margins.
        </p>
        <Button asChild size="lg">
          <Link to="/admin">Go to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
};

export default Index;
