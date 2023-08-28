import { createContext, useContext, useState } from "react";
import { LoadingContextInterface, LoadingProviderInterface } from "@/interface";

const initialValue: LoadingContextInterface = {
  isLoading: false,
  setLoading: () => {},
};

const LoadingContext = createContext<LoadingContextInterface>(initialValue);

export function useLoadingContext() {
  return useContext(LoadingContext);
}

function LoadingProvider({ children }: LoadingProviderInterface) {
  const [isLoading, setIsLoading] = useState<boolean>(initialValue.isLoading);

  const setLoading = (loading: boolean) => {
    setIsLoading(loading);
  };

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading }}>
      {children}
    </LoadingContext.Provider>
  );
}

export default LoadingProvider;
