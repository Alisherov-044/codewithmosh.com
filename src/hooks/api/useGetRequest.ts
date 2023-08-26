import { BareFetcher } from "swr";
import { useRequest } from "./useRequest";

export function useGetRequest<T>(url: string, fetcher: BareFetcher<T>) {
  return useRequest<T>(url, fetcher);
}
