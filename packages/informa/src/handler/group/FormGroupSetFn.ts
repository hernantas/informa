import { DeepPartial } from '../../type/DeepPartial'

/** Function interface that modify property value of `<T> */
export interface FormGroupSetFn<T> {
  <K extends keyof T>(key: K, newValue: DeepPartial<T[K]> | undefined): void
}
