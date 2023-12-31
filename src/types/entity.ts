export interface PromptEntity {
  _id: string;
  creator: string;
  body: string;
  tag: string;
}

export interface PromptWithPopulatedCreator
  extends Omit<PromptEntity, "creator"> {
  creator: UserEntity;
}

export interface UserEntity {
  _id: string;
  email: string;
  name: string;
  image: string;
}

export interface PromptInput {
  search?: string;
  tag?: string;
  creatorId?: string;
  page?: number;
  limit?: number;
}

export interface UserInput {
  id?: string;
  email?: string;
}
