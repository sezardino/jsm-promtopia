import { PromptEntity } from "@/libs/mongoose/modules/prompt/prompt.model";
import { CreatePromptInput } from "@/libs/mongoose/services";
import { AbstractApiModule } from "./_abstract";

export class PromptModule extends AbstractApiModule {
  create(input: CreatePromptInput) {
    return this.fetcher<PromptEntity>("/api/prompt/new", {
      method: "POST",
      body: JSON.stringify(input),
    });
  }

  getMany() {
    return this.fetcher<PromptEntity>("/api/prompt/", {
      method: "GET",
    });
  }
}
