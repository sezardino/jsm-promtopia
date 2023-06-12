"use client";

import { PromptFormWrapper } from "@/components";
import { PromptFormValues } from "@/components/forms/PromptForm/PromptForm";
import { ProjectUrls } from "@/const/project-urls";
import { useCreatePromptMutation } from "@/hooks/mutations/create-prompt";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useCallback } from "react";

const CreatePromptPage = () => {
  const router = useRouter();
  const { data: session } = useSession();
  const { mutateAsync: createPrompt, isLoading: isCreatePromptLoading } =
    useCreatePromptMutation();

  const createPromptHandler = useCallback(
    async (prompt: PromptFormValues) => {
      if (!session?.user?.id) return;

      await createPrompt(
        { ...prompt, creator: session.user.id },
        { onSuccess: () => router.push(ProjectUrls.home) }
      );
    },
    [session?.user.id]
  );

  return (
    <PromptFormWrapper
      type="create"
      isLoading={isCreatePromptLoading}
      onFormSubmit={createPromptHandler}
    />
  );
};

export default CreatePromptPage;
