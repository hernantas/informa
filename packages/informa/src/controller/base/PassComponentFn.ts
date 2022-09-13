import { FormProps } from '../../props/FormProps'

/** Function interface that generate {@link FormProps} */
export interface PassComponentFn<T> {
  (): Required<FormProps<T>>
}
