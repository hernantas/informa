import { Key } from 'react'
import { FormState } from '../state/FormState'

/** Form component properties. Can be used as base interface for component props */
export interface FormProps<T> extends Partial<FormState<T>> {
  key?: Key | undefined
}
