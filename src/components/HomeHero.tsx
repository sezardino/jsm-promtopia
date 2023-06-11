import { type ComponentPropsWithoutRef, type FC } from "react";

export interface HomeHeroProps extends ComponentPropsWithoutRef<"div"> {}

export const HomeHero: FC<HomeHeroProps> = (props) => {
  const { className, ...rest } = props;

  return (
    <section {...rest} className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover
        <br className="max-md:hidden" />
        <span className="orange-gradient text-center">AI-prompts</span>
      </h1>
      <p className="text-center">A collection of prompts to share</p>
    </section>
  );
};
