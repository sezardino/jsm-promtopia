import { type ComponentPropsWithoutRef, type FC } from "react";

import { cn } from "@/utils/cn";
import styles from "./Input.module.scss";

export interface InputProps extends ComponentPropsWithoutRef<"input"> {}

export const Input: FC<InputProps> = (props) => {
  const { className, ...rest } = props;

  return <input {...rest} className={cn(styles.input, className)} />;
};
