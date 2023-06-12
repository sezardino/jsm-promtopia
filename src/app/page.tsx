"use client";

import { HomeHero, PromptList } from "@/components";
import { SearchForm } from "@/components/forms/SearchForm/SearchForm";
import { usePromptsQuery } from "@/hooks/queries/prompts";
import { useSession } from "next-auth/react";
import { useState } from "react";

export default function Home() {
  const { data: session } = useSession();
  const [searchString, setSearchString] = useState("");
  const { data: promptsResponse, isLoading: isPromptsLoading } =
    usePromptsQuery({
      search: searchString || undefined,
    });

  return (
    <main className="container mx-auto">
      <HomeHero />

      <section>
        <SearchForm
          prevSearchString={searchString}
          onFormSubmit={setSearchString}
          className="mt-5 max-w-lg mx-auto"
        />

        {promptsResponse?.data && (
          <>
            <PromptList
              currentUserId={session?.user.id || ""}
              prompts={promptsResponse.data}
              className="mt-5"
            />
          </>
        )}
      </section>
    </main>
  );
}
