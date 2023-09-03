import { createContext, useContext, useEffect, useState } from "react";
import {
  FeaturesContextInterface,
  FeaturesProviderInterface,
} from "@/interface";
import { fetcher } from "@/utils";
import { useGetRequest } from "@/hooks";
import { FeaturesUrl } from "@/utils/urls";
import { FeatureCardScheme } from "@/interface/scheme.interface";

const initialValue: FeaturesContextInterface = {
  features: [],
};

const FeaturesContext = createContext<FeaturesContextInterface>(initialValue);

export function useFeaturesContext() {
  return useContext(FeaturesContext);
}

function FeaturesProvider({ children }: FeaturesProviderInterface) {
  const [features, setFeatures] = useState<FeatureCardScheme[] | []>([]);

  const { data } = useGetRequest<FeatureCardScheme[]>(FeaturesUrl, fetcher);

  useEffect(() => {
    if (data) {
      setFeatures(data);
    }
  }, [data]);

  return (
    <FeaturesContext.Provider value={{ features }}>
      {children}
    </FeaturesContext.Provider>
  );
}

export default FeaturesProvider;
