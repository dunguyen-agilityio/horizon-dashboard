export const compareString = (a: string, b: string) => {
  return a.localeCompare(b);
};

export const compareDate = (a: Date, b: Date) => {
  return a.getTime() - b.getTime();
};

export const compareNumber = (a: number, b: number) => {
  return a - b;
};
