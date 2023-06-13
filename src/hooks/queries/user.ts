import { apiService } from "@/services/api";
import { UserInput } from "@/types";
import { useQuery } from "@tanstack/react-query";

export const USER_QUERY_KEY = "prompts";

export const useUserQuery = (input: UserInput) =>
  useQuery({
    queryKey: [USER_QUERY_KEY, { ...input }],
    queryFn: () => apiService.user.getOne(input),
    enabled: !!input.id || !!input.email,
  });
