import { createContext, useContext, useEffect, useState } from "react";
import {
  StatisticsContextInterface,
  StatisticsProviderInterface,
} from "@/interface";
import { fetcher } from "@/utils";
import { useGetRequest } from "@/hooks";
import { StatisticsUrl } from "@/utils/urls";
import { StatisticsCardScheme } from "@/interface/scheme.interface";

const initialValue: StatisticsContextInterface = {
  statistics: [],
};

const StatisticsContext =
  createContext<StatisticsContextInterface>(initialValue);

export function useStatisticsContext() {
  return useContext(StatisticsContext);
}

function StatisticsProvider({ children }: StatisticsProviderInterface) {
  const [statistics, setStatistics] = useState<StatisticsCardScheme[] | []>([]);

  const { data } = useGetRequest<StatisticsCardScheme[]>(
    StatisticsUrl,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setStatistics(data);
    }
  }, [data]);

  return (
    <StatisticsContext.Provider value={{ statistics }}>
      {children}
    </StatisticsContext.Provider>
  );
}

export default StatisticsProvider;
