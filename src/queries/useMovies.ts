import { useQuery } from "@tanstack/react-query"
import { MovieType, ResponseType } from "../types"
import { request } from "../utils/request";

async function fetchMovies(): Promise<ResponseType<MovieType[]>> {
  return request<MovieType[]>('movie');
}

const useMovies = () => useQuery<ResponseType<MovieType[]>>({
  queryKey: ['movies'],
  queryFn: fetchMovies,
  initialData: {
    docs: [],
    limit: 0,
    offset: 0,
    page: 0,
    pages: 0,
    total: 0
  },
  retry: 0,
})

export default useMovies;