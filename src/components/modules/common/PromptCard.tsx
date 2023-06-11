import { type ComponentPropsWithoutRef, type FC } from "react";

export interface PromptCardProps extends ComponentPropsWithoutRef<"div"> {}

export const PromptCard: FC<PromptCardProps> = (props) => {
  const { className, ...rest } = props;

  return <div {...rest}></div>;
};
