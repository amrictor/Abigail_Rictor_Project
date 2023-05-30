import { ResponseType } from "types";

export async function request<T>(path: string) : Promise<ResponseType<T>> {
  const headers = { 'Authorization': 'Bearer _WheUverXe-mxzif7mjF' };
  return fetch(`https://the-one-api.dev/v2/${path}`, { headers }).then(res => res.json());
}