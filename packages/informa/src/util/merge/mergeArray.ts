import { MergeFn } from './MergeFn'

/**
 * Default implementation of {@link MergeFn} that create new `<T>` value with its
 * `<K>` key modified with `<T[K]>` value but for array
 *
 * @param prevValue
 * @param key
 * @param newFieldValue
 * @returns
 */
export const mergeArray: MergeFn<unknown[]> = (
  prevValue,
  key,
  newFieldValue
) => {
  const newArray = [...(prevValue ?? [])]
  newArray[key] = newFieldValue as any
  return newArray
}
