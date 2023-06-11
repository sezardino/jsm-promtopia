import { cn } from "@/utils/cn";
import Link from "next/link";
import { type FC } from "react";

export interface ButtonProps {
  type?: "button" | "submit" | "reset";
  variant?: "outline" | "black";
  onClick?: () => void;
  href?: string;
  isBlank?: boolean;
  text: string;
  className?: string;
}

export const Button: FC<ButtonProps> = (props) => {
  const {
    type = "button",
    variant = "black",
    href,
    text,
    isBlank = false,
    className,
    ...rest
  } = props;

  const variantClass = variant === "black" ? "black_btn" : "outline_btn";
  const classNames = cn(variantClass, className);

  if (href && href.startsWith("http")) {
    return (
      <a
        {...rest}
        href={href}
        target={"_blank"}
        rel={"noopener noreferrer"}
        className={classNames}
      >
        {text}
      </a>
    );
  }

  if (href) {
    return (
      <Link href={href} className={classNames}>
        {text}
      </Link>
    );
  }

  return (
    <button {...rest} type={type} className={classNames}>
      {text}
    </button>
  );
};
