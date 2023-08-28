import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoadingProvider from "@/context/loadingContext";
import StatisticsProvider from "@/context/statisticsContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <StatisticsProvider>
        <Component {...pageProps} />
      </StatisticsProvider>
    </LoadingProvider>
  );
}
