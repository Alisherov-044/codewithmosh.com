import { useSWRConfig } from "swr";
import { fetcher } from "@/utils";
import { useState } from "react";

export function useDeleteRequest<T>() {
  const { mutate } = useSWRConfig();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const deleteRequest = async (url: string, id: number) => {
    await setIsLoading(true);
    const response = await mutate<T>(
      url,
      fetcher(url, {
        method: "DELETE",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(id),
      })
    );
    await setIsLoading(false);

    return {
      response,
      success: !!response,
      isLoading,
    };
  };

  return { deleteRequest };
}
