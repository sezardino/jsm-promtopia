import { type ComponentPropsWithoutRef, type FC } from "react";

export interface NavigationProps extends ComponentPropsWithoutRef<"div"> {}

export const Navigation: FC<NavigationProps> = (props) => {
  const { className, ...rest } = props;

  return <div {...rest}></div>;
};
