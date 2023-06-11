import { type ComponentPropsWithoutRef, type FC } from "react";

export interface ProfileProps extends ComponentPropsWithoutRef<"div"> {}

export const Profile: FC<ProfileProps> = (props) => {
  const { className, ...rest } = props;

  return <div {...rest}></div>;
};
