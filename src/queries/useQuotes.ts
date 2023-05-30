import { useQuery } from "@tanstack/react-query"
import { QuoteType, ResponseType } from "types"
import { request } from "utils/request";

async function fetchQuotes(page: number): Promise<ResponseType<QuoteType[]>> {
  return request<QuoteType[]>(`quote?limit=25&page=${page}`);
}

const useQuotes = (page: number) => useQuery<ResponseType<QuoteType[]>>({
  queryKey: ['quotes', page],
  queryFn: () => fetchQuotes(page),
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

export default useQuotes;