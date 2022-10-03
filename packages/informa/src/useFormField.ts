import { FormFieldController } from './controller/field/FormFieldController'
import { useFormFieldController } from './controller/field/useFormFieldController'
import { getFormFieldHandler } from './handler/field/getFormFieldHandler'
import { FormProps } from './props/FormProps'

/**
 * Create controller (similar with {@link getFormFieldHandler}) that manage its
 * own state
 *
 * @param props
 * @returns
 */
export function useFormField<T>(props?: FormProps<T>): FormFieldController<T> {
  return useFormFieldController(props)
}
