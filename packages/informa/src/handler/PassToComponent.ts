import { FormProps } from '../props/FormProps'

/** Function interface that generate {@link FormProps} */
export interface PassToComponent<T> {
  (): FormProps<T>
}