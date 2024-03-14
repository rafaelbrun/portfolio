export const cn = (classNames: Record<string, boolean>): string => {
  return Object.entries(classNames)
    .filter(([, include]) => include)
    .map(([className]) => className)
    .join(" ");
};
