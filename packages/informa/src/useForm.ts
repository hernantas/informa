import { FormControl } from './control/FormControl'
import { useFormControl } from './control/useFormControl'
import { getFormHandler } from './handler/getFormHandler'
import { FormProps } from './props/FormProps'

/**
 * Create controller (similar with {@link getFormHandler}) that manage its own
 * state
 *
 * @param props
 * @returns
 */
export function useForm<T>(props?: FormProps<T>): FormControl<T> {
  return useFormControl(props)
}
