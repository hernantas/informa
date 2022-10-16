import { FormFieldControl } from './control/field/FormFieldControl'
import { useFormFieldControl } from './control/field/useFormFieldControl'
import { getFormFieldHandler } from './handler/field/getFormFieldHandler'
import { FormProps } from './props/FormProps'

/**
 * Create controller (similar with {@link getFormFieldHandler}) that manage its
 * own state
 *
 * @param props
 * @returns
 */
export function useFormField<T>(props?: FormProps<T>): FormFieldControl<T> {
  return useFormFieldControl(props)
}
