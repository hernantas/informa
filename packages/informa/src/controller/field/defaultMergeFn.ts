import { DeepPartial } from '../../type/DeepPartial'
import { MergeFn } from './MergeFn'

/**
 * Default implementation of {@link MergeFn} that create new `<T>` value with its
 * `<K>` key modified with `<T[K]>` value
 *
 * @param prevValue
 * @param key
 * @param newFieldValue
 * @returns
 */
export function defaultMergeFn<T, K extends keyof T>(
  prevValue: DeepPartial<T> | undefined,
  key: K,
  newFieldValue: DeepPartial<T[K]> | undefined
): DeepPartial<T> {
  return {
    ...prevValue,
    [key]: newFieldValue,
  }
}
