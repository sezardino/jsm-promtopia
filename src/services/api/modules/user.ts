import { UserEntity, UserInput } from "@/types";
import { AbstractApiModule } from "./_abstract";

export class UserModule extends AbstractApiModule {
  getOne(input: UserInput) {
    return this.fetcher<UserEntity>(`/api/user`, {
      method: "GET",
      params: input,
    });
  }
}
