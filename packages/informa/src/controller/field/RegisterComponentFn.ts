import { FormProps } from '../../props/FormProps'

/**
 * Function interface that generate {@link FormProps} that handle (its value and
 * handler) property of `<T>` value
 */
export interface RegisterComponentFn<T> {
  <K extends keyof T>(key: K): Required<FormProps<T[K]>>
}
