import { DeepPartial } from '../../type/DeepPartial'

/**
 * Function interface for creating a new `<T>` value with its selected `<K>`
 * property modified with new property value `<T[K]>`
 */
export interface MergeFn<T> {
  <K extends keyof T>(
    prevValue: DeepPartial<T> | undefined,
    key: K,
    newFieldValue: DeepPartial<T[K]> | undefined
  ): DeepPartial<T>
}
