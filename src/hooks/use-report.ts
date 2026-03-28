import { useQuery } from "@tanstack/react-query";
import { fetchReport } from "@/lib/api";

export function useReport(id: string) {
  return useQuery({
    queryKey: ["report", id],
    queryFn: () => fetchReport(id),
    retry: 1,
    staleTime: Infinity,
  });
}
