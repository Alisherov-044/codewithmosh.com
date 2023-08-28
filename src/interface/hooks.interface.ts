export interface ApiStateInterface<T> {
  isLoading: boolean;
  response: T | undefined;
  error: string | undefined;
  success: boolean;
}
