import useSwr, { BareFetcher } from "swr";

export function useRequest<T>(url: string, fetcher: BareFetcher<T>) {
  const { data, error, isLoading, isValidating, mutate } = useSwr<T>(
    url,
    fetcher
  );

  return { data, error, isLoading, isValidating, mutate };
}
