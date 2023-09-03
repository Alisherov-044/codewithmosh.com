import { useSWRConfig } from "swr";
import { fetcher } from "@/utils";
import { useState } from "react";

export function usePatchRequest<T>() {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const patchRequest = async (url: string, data: T) => {
    await setIsLoading(true);
    const response = await mutate<T>(
      url,
      fetcher(url, {
        method: "PATCH",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(data),
      })
    );
    await setIsLoading(false);

    return {
      response,
      success: !!response,
      isLoading,
    };
  };

  return { patchRequest };
}
