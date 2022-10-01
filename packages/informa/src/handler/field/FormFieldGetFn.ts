import { DeepPartial } from '../../type/DeepPartial'

/** Function interface that return property value of `<T>` */
export interface FormFieldGetFn<T> {
  <K extends keyof T>(key: K, defaultValue?: DeepPartial<T[K]>):
    | DeepPartial<T[K]>
    | undefined
}
