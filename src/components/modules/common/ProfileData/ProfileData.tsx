import { ProjectUrls } from "@/const/project-urls";
import { cn } from "@/utils/cn";
import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { type ComponentPropsWithoutRef, type FC } from "react";

export interface ProfileDataProps extends ComponentPropsWithoutRef<"div"> {
  id: string;
  image: string;
  name: string;
  email: string;
  withLinks?: boolean;
}

export const ProfileData: FC<ProfileDataProps> = (props) => {
  const {
    withLinks = false,
    id,
    email,
    image,
    name,
    className,
    ...rest
  } = props;
  const { data: session } = useSession();

  const linkHref =
    session?.user?.id === id ? ProjectUrls.myProfile : ProjectUrls.profile + id;

  const nameJsx = (
    <h3 className="font-satoshi font-semibold text-gray-900">{name}</h3>
  );
  const emailJsx = <p className="font-inter text-sm text-gray-500">{email}</p>;

  return (
    <article
      {...rest}
      className={cn("flex-1 flex justify-start items-center gap-3", className)}
    >
      <Image
        src={image}
        alt={name + " image"}
        width={40}
        height={40}
        className="rounded-full object-contain"
      />

      <div className="flex flex-col">
        {withLinks ? (
          <>
            <Link href={linkHref}>{nameJsx}</Link>
            <Link href={linkHref}>{emailJsx}</Link>
          </>
        ) : (
          <>
            {nameJsx}
            {emailJsx}
          </>
        )}
      </div>
    </article>
  );
};
