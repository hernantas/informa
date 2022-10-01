import { FormFieldHandler } from './controller/field/FormFieldHandler'
import { getFormFieldHandler } from './controller/field/getFormFieldHandler'
import { FormProps } from './props/FormProps'
import { useFormProps } from './useFormProps'

/**
 * Create controller (similar with {@link getFormFieldHandler}) that manage its
 * own state
 *
 * @param props
 * @returns
 */
export function useForm<T>(props?: FormProps<T>): FormFieldHandler<T> {
  const propsState = useFormProps(props)
  return getFormFieldHandler(propsState)
}
