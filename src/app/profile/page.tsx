"use client";

import { PromptList } from "@/components";
import { usePromptList } from "@/components/modules/common/PromptList/PromptList.hook";
import { usePromptsQuery } from "@/hooks/queries/prompts";
import { useSession } from "next-auth/react";

const MyProfilePage = () => {
  const { data: session } = useSession();
  const { searchString, setSearchString } = usePromptList();

  const { data: prompts, isLoading: isPromptsLoading } = usePromptsQuery({
    creatorId: session?.user?.id,
    search: searchString || undefined,
  });

  return (
    <main className="container mx-auto">
      <div>
        <h1 className="text-3xl font-semibold text-gray-900">My Profile</h1>
      </div>

      {prompts && (
        <PromptList
          searchString={searchString}
          onSearchStringChange={setSearchString}
          currentUserId={session?.user.id || ""}
          prompts={prompts.data}
        />
      )}
    </main>
  );
};

export default MyProfilePage;
