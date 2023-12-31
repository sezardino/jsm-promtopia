import { apiService } from "@/services/api";
import { PromptInput } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const PROMPTS_QUERY_KEY = "prompts";

export const usePromptsQuery = (input?: PromptInput) =>
  useQuery({
    queryKey: [PROMPTS_QUERY_KEY, { ...input }],
    queryFn: () => apiService.prompt.getMany(input),
    enabled: input?.creatorId !== undefined ? !!input.creatorId : undefined,
  });
