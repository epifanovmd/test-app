let timeoutId: any | undefined;
export const debounce = (func: () => void, delay: number): void => {
  timeoutId && clearTimeout(timeoutId);
  timeoutId = setTimeout(() => func(), delay);
};
