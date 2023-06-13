import { type ComponentPropsWithoutRef, type FC } from "react";

import { SearchForm } from "@/components/forms/SearchForm/SearchForm";
import { PromptWithPopulatedCreator } from "@/types";
import { cn } from "@/utils/cn";
import { PromptCard } from "../PromptCard/PromptCard";
import styles from "./PromptList.module.css";

export interface PromptListProps extends ComponentPropsWithoutRef<"ul"> {
  type?: "feed" | "profile";
  prompts: PromptWithPopulatedCreator[];
  currentUserId: string;
  onPromptDelete?: (id: string) => void;
  showUserCredentials?: boolean;
  searchString: string;
  onSearchStringChange: (searchString: string) => void;
}

export const PromptList: FC<PromptListProps> = (props) => {
  const {
    searchString,
    onSearchStringChange,
    showUserCredentials = false,
    type = "feed",
    onPromptDelete,
    prompts,
    currentUserId,
    className,
    ...rest
  } = props;

  const isProfile = type === "profile";

  return (
    <section {...rest} className={className}>
      <SearchForm
        prevSearchString={searchString}
        onFormSubmit={onSearchStringChange}
        className="mt-5 max-w-lg mx-auto"
      />
      <ul className={cn(styles.element)}>
        {prompts.map((prompt) => (
          <li key={prompt._id}>
            <PromptCard
              isUserOwner={
                isProfile ? currentUserId === prompt.creator._id : false
              }
              showUserCredentials={showUserCredentials}
              body={prompt.body}
              tag={prompt.tag}
              creator={prompt.creator}
              id={prompt._id}
              onDeleteClick={() =>
                isProfile ? onPromptDelete?.(prompt._id) : undefined
              }
            />
          </li>
        ))}
      </ul>
    </section>
  );
};
