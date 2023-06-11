import { type ComponentPropsWithoutRef, type FC } from "react";

export interface FeedProps extends ComponentPropsWithoutRef<"div"> {}

export const Feed: FC<FeedProps> = (props) => {
  const { className, ...rest } = props;

  return <div {...rest}></div>;
};
