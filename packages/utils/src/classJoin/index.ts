export const classJoin = (
  ...args: (string | undefined | false | null)[]
): string | "" => {
  return args
    .filter((el) => el && el.trim())
    .map((el) => el && el.trim())
    .join(" ");
};
