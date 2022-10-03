import { FormProps } from '../props/FormProps'
import { FormState } from './FormState'
import { FormStateControl } from './FormStateControl'

/**
 * {@link FormProps} compatible object that has additional functions
 * ({@link FormStateControl}) to control the internal {@link FormState}
 */
export interface FormStateProps<T> extends FormProps<T>, FormStateControl<T> {}
