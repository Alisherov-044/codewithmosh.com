import "@/styles/globals.css";
import type { AppProps } from "next/app";
import LoadingProvider from "@/context/loadingContext";
import StatisticsProvider from "@/context/statisticsContext";
import FeaturesProvider from "@/context/featuresContext";
import CoursesProvider from "@/context/coursesContext";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <LoadingProvider>
      <StatisticsProvider>
        <FeaturesProvider>
          <CoursesProvider>
            <Component {...pageProps} />
          </CoursesProvider>
        </FeaturesProvider>
      </StatisticsProvider>
    </LoadingProvider>
  );
}
