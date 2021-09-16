import { writable } from 'svelte/store';

let val = false;
export const isOpen = writable(false);

export const toggle = (delay: number = 0) => () => {
  setTimeout(() => {
    val = !val;
    isOpen.set(val);
  }, delay);
};
