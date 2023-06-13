"use client";

import { UserEntity } from "@/types";
import Image from "next/image";
import { useState, type ComponentPropsWithoutRef, type FC } from "react";

import { ProjectUrls } from "@/const/project-urls";
import { cn } from "@/utils/cn";
import Link from "next/link";
import { ProfileData } from "../ProfileData/ProfileData";
import styles from "./PromptCard.module.css";

export interface PromptCardProps extends ComponentPropsWithoutRef<"div"> {
  isUserOwner?: boolean;
  onDeleteClick?: () => void;
  onTagClick?: () => void;
  creator: UserEntity;
  body: string;
  tag: string;
  id: string;
  showUserCredentials?: boolean;
}

export const PromptCard: FC<PromptCardProps> = (props) => {
  const {
    showUserCredentials = false,
    isUserOwner = false,
    onDeleteClick,
    onTagClick,
    body,
    creator,
    tag,
    id,
    className,
    ...rest
  } = props;

  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(body);
    navigator.clipboard.writeText(body);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div {...rest} className={cn(styles.element, className)}>
      <div className="flex justify-between items-start gap-5">
        <ProfileData
          email={creator.email}
          image={creator.image}
          name={creator.name}
          id={creator._id}
          withLinks={showUserCredentials}
        />

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === body ? "/icons/tick.svg" : "/icons/copy.svg"}
            alt={copied === body ? "tick_icon" : "copy_icon"}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{body}</p>
      <p
        className={cn(
          "font-inter text-sm blue_gradient",
          onTagClick && "hover:underline cursor-pointer"
        )}
        onClick={onTagClick}
      >
        #{tag}
      </p>

      {isUserOwner && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <Link
            href={ProjectUrls.editPrompt + id}
            className="font-inter text-sm green_gradient cursor-pointer"
          >
            Edit
          </Link>
          {onDeleteClick && (
            <button
              type="button"
              className="font-inter text-sm orange_gradient cursor-pointer"
              onClick={onDeleteClick}
            >
              Delete
            </button>
          )}
        </div>
      )}
    </div>
  );
};
