import { apiService } from "@/services/api";
import { PromptInput } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const PROMPTS_QUERY_KEY = "prompts";

export const usePromptsQuery = (input?: PromptInput) =>
  useQuery({
    queryKey: [PROMPTS_QUERY_KEY],
    queryFn: () => apiService.prompt.getMany(input),
  });
