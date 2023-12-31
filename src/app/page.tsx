"use client";

import { HomeHero, PromptList } from "@/components";
import { usePromptList } from "@/components/modules/common/PromptList/PromptList.hook";
import { usePromptsQuery } from "@/hooks/queries/prompts";
import { useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  const { searchString, setSearchString } = usePromptList();
  const { data: promptsResponse, isLoading: isPromptsLoading } =
    usePromptsQuery({
      search: searchString || undefined,
    });

  return (
    <main className="container mx-auto">
      <HomeHero />

      {promptsResponse?.data && (
        <PromptList
          searchString={searchString}
          onSearchStringChange={setSearchString}
          currentUserId={session?.user.id || ""}
          prompts={promptsResponse.data}
          showUserCredentials
          className="mt-5"
        />
      )}
    </main>
  );
}
