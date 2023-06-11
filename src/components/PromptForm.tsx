import { type ComponentPropsWithoutRef, type FC } from "react";

export interface PromptFormProps extends ComponentPropsWithoutRef<"div"> {}

export const PromptForm: FC<PromptFormProps> = (props) => {
  const { className, ...rest } = props;

  return <div {...rest}></div>;
};
