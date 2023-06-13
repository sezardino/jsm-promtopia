"use client";

import { PromptList } from "@/components";
import { ProfileData } from "@/components/modules/common/ProfileData/ProfileData";
import { usePromptList } from "@/components/modules/common/PromptList/PromptList.hook";
import { usePromptsQuery } from "@/hooks/queries/prompts";
import { useUserQuery } from "@/hooks/queries/user";
import { useParams } from "next/navigation";

const ProfilePage = () => {
  const params = useParams();
  const { data: user, isLoading: isUserLoading } = useUserQuery({
    id: params.id,
  });

  const { searchString, setSearchString } = usePromptList();

  const { data: prompts, isLoading: isPromptsLoading } = usePromptsQuery({
    creatorId: params.id,
    search: searchString || undefined,
  });

  if (!user) return null;

  return (
    <main className="container mx-auto">
      <ProfileData
        email={user.email}
        id={user._id}
        image={user.image}
        name={user.name}
      />

      {prompts && (
        <PromptList
          onSearchStringChange={setSearchString}
          searchString={searchString}
          currentUserId={""}
          prompts={prompts.data}
        />
      )}
    </main>
  );
};

export default ProfilePage;
