import { CreatePromptInput } from "@/libs/mongoose/services";
import { apiService } from "@/services/api";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { PROMPTS_QUERY_KEY } from "../queries/prompts";

export const useCreatePromptMutation = () => {
  const client = useQueryClient();

  return useMutation({
    mutationFn: (input: CreatePromptInput) => apiService.prompt.create(input),
    onSuccess: () => client.invalidateQueries([PROMPTS_QUERY_KEY]),
  });
};
