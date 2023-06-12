"use client";

import { UserEntity } from "@/types";
import Image from "next/image";
import { useState, type ComponentPropsWithoutRef, type FC } from "react";

import { cn } from "@/utils/cn";
import styles from "./PromptCard.module.css";

export interface PromptCardProps extends ComponentPropsWithoutRef<"div"> {
  isUserOwner: boolean;
  creator: UserEntity;
  body: string;
  tag: string;
}

export const PromptCard: FC<PromptCardProps> = (props) => {
  const { isUserOwner, body, creator, tag, className, ...rest } = props;

  const [copied, setCopied] = useState("");

  const handleCopy = () => {
    setCopied(body);
    navigator.clipboard.writeText(body);
    setTimeout(() => setCopied(""), 3000);
  };

  return (
    <div {...rest} className={cn(styles.element, className)}>
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer">
          <Image
            src={creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">
              {creator.name}
            </h3>
            <p className="font-inter text-sm text-gray-500">{creator.email}</p>
          </div>
        </div>

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
      <p className="font-inter text-sm blue_gradient cursor-pointer">#{tag}</p>

      {/* {isUserOwner && pathName === "/profile" && ( */}
      <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
        <p
          className="font-inter text-sm green_gradient cursor-pointer"
          // onClick={handleEdit}
        >
          Edit
        </p>
        <p
          className="font-inter text-sm orange_gradient cursor-pointer"
          // onClick={handleDelete}
        >
          Delete
        </p>
      </div>
      {/* )} */}
    </div>
  );
};
