export const truncateWord = (str: string, num: number) => {
  return str.slice(0, num).trimEnd() + (str.length > num ? "..." : "");
};
