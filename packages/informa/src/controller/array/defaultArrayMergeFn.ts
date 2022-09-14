import { DeepPartial } from '../../type/DeepPartial'

/**
 * Default implementation of {@link MergeFn} that create new `<T>` value with its
 * `<K>` key modified with `<T[K]>` value but for array
 *
 * @param prevValue
 * @param key
 * @param newFieldValue
 * @returns
 */
export function defaultArrayMergeFn<T, K extends keyof T[]>(
  prevValue: (DeepPartial<T> | undefined)[] | undefined,
  key: K,
  newFieldValue: DeepPartial<T[][K]> | undefined
): (DeepPartial<T> | undefined)[] {
  const newArray = [...(prevValue ?? [])]
  newArray[key] = newFieldValue as any
  return newArray
}
