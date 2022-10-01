import { FormProps } from '../../props/FormProps'

/**
 * Function interface that generate {@link FormProps} that handle (its value and
 * handler) property of `<T>` value
 */
export interface RegisterToComponent<T> {
  <K extends keyof T>(key: K): Required<FormProps<T[K]>>
}
