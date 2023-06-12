export interface PromptEntity {
  _id: string;
  creator: string;
  body: string;
  tag: string;
}

export interface UserEntity {
  _id: string;
  email: string;
  name: string;
  image: string;
}
