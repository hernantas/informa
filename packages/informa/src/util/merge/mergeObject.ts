import { MergeFn } from './MergeFn'

/**
 * Default implementation of {@link MergeFn} that create new `<T>` value with its
 * `<K>` key modified with `<T[K]>` value
 *
 * @param prevValue
 * @param newValue
 * @returns
 */
export const mergeObject: MergeFn<unknown> = (
  prevValue,
  key,
  newFieldValue
) => ({
  ...prevValue,
  [key]: newFieldValue,
})
