/** Make all properties in `<T>` deeply optional */
export type DeepPartial<T> = {
  [K in keyof T]?: DeepPartial<T[K]> | undefined
}
