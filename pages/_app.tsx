import '@/index.css'; // Ensure this path is correct for global styles
import type { AppProps } from 'next/app';
import { ExperimentProvider } from '@/contexts/ExperimentContext'; // Ensure this path is correct

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ExperimentProvider>
      <Component {...pageProps} />
    </ExperimentProvider>
  );
}

export default MyApp;
