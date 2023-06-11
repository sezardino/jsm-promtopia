"use client";

import { getProviders, signIn, signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import {
  useEffect,
  useState,
  type ComponentPropsWithoutRef,
  type FC,
} from "react";
import { Button } from "./UI";

export interface NavigationProps extends ComponentPropsWithoutRef<"div"> {}

export const Navigation: FC<NavigationProps> = (props) => {
  const { className, ...rest } = props;
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const signOutHandler = () => {
    signOut();
    closeMenu();
  };

  // TODO: delete
  const isUserLogged = true;

  const [providers, setProviders] = useState<Awaited<
    ReturnType<typeof getProviders>
  > | null>(null);

  useEffect(() => {
    const fetchProviders = async () => {
      const providers = await getProviders();
      setProviders(providers);
    };

    fetchProviders();
  }, []);

  return (
    <nav {...rest} className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image
          src="/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {isUserLogged ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <Button variant="outline" onClick={signOut} text="Sign Out" />

            <Link href="/profile">
              <Image
                src={"/images/logo.svg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </Link>
          </div>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <Button
              key={provider.name}
              variant="black"
              onClick={() => signIn(provider.id)}
              text="Sign In"
            />
          ))
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {isUserLogged ? (
          <div className="flex">
            <button onClick={toggleMenu}>
              <Image
                src={"images/logo.svg"}
                width={37}
                height={37}
                className="rounded-full"
                alt="profile"
              />
            </button>

            {isMenuOpen && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_link"
                  onClick={closeMenu}
                >
                  My Profile
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_link"
                  onClick={closeMenu}
                >
                  Create Prompt
                </Link>

                <Button
                  variant="black"
                  text="Sign Out"
                  className="mt-5 w-full"
                  onClick={signOutHandler}
                />
              </div>
            )}
          </div>
        ) : (
          providers &&
          Object.values(providers).map((provider) => (
            <Button
              key={provider.name}
              variant="black"
              text="Sign Out"
              onClick={() => signIn(provider.id)}
            />
          ))
        )}
      </div>
    </nav>
  );
};
