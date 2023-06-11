import { apiService } from "@/services/api";
import { useQuery } from "@tanstack/react-query";

export const PROMPTS_QUERY_KEY = "prompts";

export const usePromptsQuery = () =>
  useQuery({
    queryKey: [PROMPTS_QUERY_KEY],
    queryFn: () => apiService.prompt.getMany(),
  });
