import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ExperimentProvider } from "@/contexts/ExperimentContext";
import { experimentsData } from "@/data/experimentsData";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as SonnerToaster } from "@/components/ui/sonner"; // Renamed to avoid conflict
import '@/index.css';

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  // Check if the component has a custom layout
  const getLayout = (Component as any).getLayout || ((page: React.ReactElement) => page);

  return (
    <QueryClientProvider client={queryClient}>
      <ExperimentProvider experiments={experimentsData}>
        <TooltipProvider>
          <Toaster />
          <SonnerToaster />
          {getLayout(<Component {...pageProps} />)}
        </TooltipProvider>
      </ExperimentProvider>
    </QueryClientProvider>
  );
}
export default MyApp;
