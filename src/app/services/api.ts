import { CreatePromptInput } from "@/libs/mongoose/services";

class ApiService {
  private async fetcher(url: string, options?: any) {
    return fetch(url, options).then((res) => res.json());
  }

  createPrompt(input: CreatePromptInput) {
    return this.fetcher("/api/prompt/new", {
      method: "POST",
      body: JSON.stringify(input),
    });
  }
}

export const apiService = new ApiService();
