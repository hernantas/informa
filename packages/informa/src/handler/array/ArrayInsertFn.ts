import { DeepPartial } from '../../type/DeepPartial'

/** Function interface for function that can insert element to an array */
export interface ArrayInsertFn<T> {
  (...newValues: DeepPartial<T>[]): void
}
