import { type ComponentPropsWithoutRef, type FC } from "react";

import { cn } from "@/utils/cn";
import styles from "./Textarea.module.css";

export interface TextareaProps extends ComponentPropsWithoutRef<"textarea"> {}

export const Textarea: FC<TextareaProps> = (props) => {
  const { className, ...rest } = props;

  return <textarea {...rest} className={cn(styles.textarea, className)} />;
};
