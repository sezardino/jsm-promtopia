import {
  CreatePromptInput,
  PaginatedData,
  PromptEntity,
  PromptInput,
  PromptWithPopulatedCreator,
} from "@/types";
import { AbstractApiModule } from "./_abstract";

export class PromptModule extends AbstractApiModule {
  create(input: CreatePromptInput) {
    return this.fetcher<PromptEntity>("/api/prompt/new", {
      method: "POST",
      data: input,
    });
  }

  getMany(input?: PromptInput) {
    return this.fetcher<PaginatedData<PromptWithPopulatedCreator>>(
      "/api/prompt/",
      {
        method: "GET",
        params: input,
      }
    );
  }
}
