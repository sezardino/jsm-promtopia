import { PromptForm } from "@/components/forms/PromptForm/PromptForm";
import { cn } from "@/utils/cn";
import { type ComponentPropsWithoutRef, type FC } from "react";

export interface PromptFormWrapperProps
  extends ComponentPropsWithoutRef<"div"> {
  type: "create" | "edit";
  onFormSubmit: () => void;
}

export const PromptFormWrapper: FC<PromptFormWrapperProps> = (props) => {
  const { type = "create", onFormSubmit, className, ...rest } = props;

  return (
    <section
      {...rest}
      className={cn("w-full max-w-full flex-start flex-col", className)}
    >
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Prompt</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your
        imagination run wild with any AI-powered platform
      </p>

      <PromptForm type={type} onFormSubmit={onFormSubmit} />
    </section>
  );
};
