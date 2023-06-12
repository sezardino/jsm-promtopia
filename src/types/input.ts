export interface CreatePromptInput {
  creator: string;
  body: string;
  tag: string;
}

export interface CreateUserInput {
  name: string;
  email: string;
  image: string;
}

export interface UserInput {
  id?: string;
  email?: string;
}
