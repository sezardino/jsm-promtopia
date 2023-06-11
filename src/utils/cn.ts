export const cn = (...classNames: (string | false | undefined)[]) =>
  classNames.filter(Boolean).join(" ");
