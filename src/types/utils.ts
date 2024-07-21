export type Keys<T> = keyof T;

export type Nullable<T = unknown> = T | undefined | null;

export type Callback<A extends unknown[] = unknown[], T = void> = (...args: A) => T;
