import { useQuery } from "@tanstack/react-query"
import { CharacterType, ResponseType } from "../types"
import { request } from "../utils/request";

async function fetchCharacters(page: number): Promise<ResponseType<CharacterType[]>> {
  return request<CharacterType[]>(`character?limit=25&page=${page}`);
}

const useCharacters = (page: number) => useQuery<ResponseType<CharacterType[]>>({
  queryKey: ['characters', page],
  queryFn: () => fetchCharacters(page),
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

export default useCharacters;