"use client";

import { Button } from "@/components/UI";
import { FormikField } from "@/components/UI/FormikField";
import { cn } from "@/utils/cn";
import { Form, FormikProvider, useFormik } from "formik";
import Link from "next/link";
import { type ComponentPropsWithoutRef, type FC } from "react";
import z from "zod";
import { toFormikValidationSchema } from "zod-formik-adapter";

export interface PromptFormValues {
  body: string;
  tags: string;
}

export interface PromptFormProps extends ComponentPropsWithoutRef<"form"> {
  type: "create" | "edit";
  onFormSubmit: () => void;
}

export const PromptForm: FC<PromptFormProps> = (props) => {
  const { type = "create", onFormSubmit, className, ...rest } = props;

  const form = useFormik<PromptFormValues>({
    initialValues: { body: "", tags: "" },
    validationSchema: toFormikValidationSchema(z.object({})),
    onSubmit: onFormSubmit,
  });

  return (
    <FormikProvider value={form}>
      <Form
        {...rest}
        className={cn(
          className,
          "mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism"
        )}
      >
        <FormikField
          name="body"
          variant="textarea"
          required
          label="Your AI Prompt"
          placeholder="Write your prompt here"
        />

        <FormikField
          name="tag"
          required
          label="Field of Prompt"
          placeholder="(#product, #webdevelopment, #idea, etc.)"
        />

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <Button
            type="submit"
            variant="orange"
            disabled={form.isSubmitting}
            text={form.isSubmitting ? `${type}ing...` : type}
          />
        </div>
      </Form>
    </FormikProvider>
  );
};
