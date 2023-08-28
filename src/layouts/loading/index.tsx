import { LoadingWrapperInterface } from "@/interface";

export function LoadingWrapper({ loading, children }: LoadingWrapperInterface) {
  return loading ? <h1>...loading</h1> : children;
}
