import { DeepPartial } from '../../type/DeepPartial'

/**
 * Function interface that takes partial `<T>` value and convert it into
 * compatible value
 */
export interface ToTextResolverFn<T> {
  (value: DeepPartial<T> | undefined):
    | string
    | ReadonlyArray<string>
    | number
    | undefined
}
