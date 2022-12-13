import { FormProps } from './FormProps'

/** Function interface that generate {@link FormProps} */
export interface PassToComponent<T> {
  (): FormProps<T>
}
