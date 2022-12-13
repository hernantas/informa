import { DeepPartial } from './DeepPartial'

/** Function interface that takes partial `<T>` value as arguments */
export interface ChangeFn<T> {
  (newValue?: DeepPartial<T> | undefined): void
}
