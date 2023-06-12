"use client";

import { cn } from "@/utils/cn";
import {
  FormEventHandler,
  useState,
  type ComponentPropsWithoutRef,
  type FC,
} from "react";

import styles from "./SearchForm.module.css";

export interface SearchFormProps extends ComponentPropsWithoutRef<"form"> {
  onFormSubmit: (searchText: string) => void;
  prevSearchString: string;
}

export const SearchForm: FC<SearchFormProps> = (props) => {
  const { prevSearchString, onFormSubmit, className, ...rest } = props;
  const [value, setValue] = useState("");

  const submitHandler: FormEventHandler<HTMLFormElement> = (evt) => {
    evt.preventDefault();
    console.log("prevSearchString", prevSearchString);
    if (prevSearchString === value) return;

    onFormSubmit(value);
  };

  return (
    <form
      {...rest}
      className={cn("relative w-full flex-center", className)}
      onSubmit={submitHandler}
    >
      <input
        type="text"
        placeholder="Search for a tag or a username"
        value={value}
        onChange={(evt) => setValue(evt.target.value)}
        className={styles.input}
      />
    </form>
  );
};
