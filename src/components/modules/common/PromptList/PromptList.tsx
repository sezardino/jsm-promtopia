import { type ComponentPropsWithoutRef, type FC } from "react";

import { PromptWithPopulatedCreator } from "@/types";
import { cn } from "@/utils/cn";
import { PromptCard } from "../PromptCard/PromptCard";
import styles from "./PromptList.module.css";

export interface PromptListProps extends ComponentPropsWithoutRef<"ul"> {
  prompts: PromptWithPopulatedCreator[];
  currentUserId: string;
}

export const PromptList: FC<PromptListProps> = (props) => {
  const { prompts, currentUserId, className, ...rest } = props;

  return (
    <ul {...rest} className={cn(styles.element, className)}>
      {prompts.map((prompt) => (
        <li key={prompt._id}>
          <PromptCard
            isUserOwner={currentUserId === prompt.creator._id}
            body={prompt.body}
            tag={prompt.tag}
            creator={prompt.creator}
          />
        </li>
      ))}
    </ul>
  );
};
