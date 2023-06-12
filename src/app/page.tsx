"use client";

import { HomeHero, PromptList } from "@/components";
import { usePromptsQuery } from "@/hooks/queries/prompts";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const { data: promptsResponse, isLoading: isPromptsLoading } =
    usePromptsQuery();

  return (
    <main>
      <HomeHero />
      {promptsResponse?.data && (
        <PromptList
          currentUserId={session?.user.id || ""}
          prompts={promptsResponse.data}
        />
      )}
    </main>
  );
}
