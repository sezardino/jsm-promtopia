import { useId, type FC } from "react";

import { Input, InputProps, Textarea, TextareaProps } from "@/components";
import { cn } from "@/utils/cn";
import styles from "./FormField.module.css";

interface InputFormFieldProps extends InputProps {
  variant?: "input";
}

interface TextareaFormFieldProps extends TextareaProps {
  variant?: "textarea";
}

interface FormFieldCommon {
  label?: string;
  error?: string;
  description?: string;
}

type Union = InputFormFieldProps | TextareaFormFieldProps;

export type FormFieldProps = Union & FormFieldCommon;

export const FormField: FC<FormFieldProps> = (props) => {
  const {
    variant = "input",
    label,
    error,
    description,
    id,
    className,
    ...rest
  } = props;

  const fieldId = useId();
  const inputId = id || fieldId;
  const descriptionId = `${inputId}-description`;
  const errorId = `${inputId}-error`;

  const commonProps = {
    id: inputId,
    "aria-describedby": description ? descriptionId : undefined,
    "aria-errormessage": error ? errorId : undefined,
    "aria-invalid": !!error,
    "aria-required": rest.required,
  };

  return (
    <div className={cn(styles.element, className)}>
      <label htmlFor={inputId} className={styles.label}>
        {label}
      </label>

      {variant === "input" && (
        <Input {...(rest as InputProps)} {...commonProps} />
      )}
      {variant === "textarea" && (
        <Textarea {...(rest as TextareaProps)} {...commonProps} />
      )}

      {description && (
        <p id={descriptionId} className="text-sm">
          {description}
        </p>
      )}

      {error && (
        <p id={errorId} className="text-xs text-red-500">
          {error}
        </p>
      )}
    </div>
  );
};
