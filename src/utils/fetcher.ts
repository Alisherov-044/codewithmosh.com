export async function fetcher(url: string, init?: RequestInit) {
  return await fetch(url, init).then((res) => res.json());
}
