import { type ComponentPropsWithoutRef, type FC } from "react";

export interface ProviderProps extends ComponentPropsWithoutRef<"div"> {}

export const Provider: FC<ProviderProps> = (props) => {
  const { className, ...rest } = props;

  return <div {...rest}></div>;
};
