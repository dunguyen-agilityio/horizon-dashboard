/* eslint-disable @typescript-eslint/no-explicit-any */
export const debounce = (
  callback: (...params: any[]) => void,
  timeout = 1000,
) => {
  let timeId: NodeJS.Timeout;

  return (...params: any[]) => {
    timeId && clearTimeout(timeId);
    timeId = setTimeout(() => {
      callback(...params);
    }, timeout);
  };
};
