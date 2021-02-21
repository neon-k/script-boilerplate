/**
 * sleep
 * @param {Number} num  - 待たせるms
 * @returns Promise
 */

export const sleep: (num: number) => Promise<unknown> = (num: number) => {
  return new Promise((resolve: (value?: unknown) => void) => setTimeout(() => resolve(), num));
};
