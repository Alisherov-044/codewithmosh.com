import { useState } from "react";
import { useSWRConfig } from "swr";
import { fetcher } from "@/utils";
import { ApiStateInterface } from "@/interface";

export function usePostRequest<T>() {
  const { mutate } = useSWRConfig();
  const [api, setApi] = useState<ApiStateInterface<T>>({
    isLoading: false,
    response: undefined,
    error: undefined,
  });

  const postRequest = (url: string, data: {}) => {
    const { isLoading, response, error } = api;

    mutate<T>(
      url,
      fetcher(url, {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
    )
      .then((response) => setApi({ ...api, isLoading: true, response }))
      .catch((error) => setApi({ ...api, error: error }))
      .finally(() => setApi({ ...api, isLoading: false }));

    return { isLoading, response, error };
  };

  return { postRequest };
}
