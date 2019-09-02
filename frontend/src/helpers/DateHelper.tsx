export const ConvertDate = (timestamp: string) => {
  const date: Date = new Date(timestamp);
  return date.toLocaleDateString("en-GB");
};
