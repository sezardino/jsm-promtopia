import { type FC } from "react";

import { useField } from "formik";
import { FormField, FormFieldProps } from "./FormField/FormField";
import { InputProps } from "./Input/Input";

export type FormikFieldProps = Omit<FormFieldProps, "error"> & {
  name: string;
};

export const FormikField: FC<FormikFieldProps> = (props) => {
  const { name, ...rest } = props;

  const [field, meta] = useField(name);

  const hasError = meta.touched && meta.error;

  return (
    <FormField
      {...(rest as InputProps)}
      {...field}
      error={hasError ? meta.error : undefined}
    />
  );
};
