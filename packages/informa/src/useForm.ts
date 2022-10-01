import { FormFieldHandler } from './controller/field/FormFieldHandler'
import { getFieldHandler } from './controller/field/getFieldHandler'
import { FormProps } from './props/FormProps'
import { useFormProps } from './useFormProps'

/**
 * Create controller (similar with {@link getFieldHandler}) that manage its own
 * state
 *
 * @param props
 * @returns
 */
export function useForm<T>(props?: FormProps<T>): FormFieldHandler<T> {
  const propsState = useFormProps(props)
  return getFieldHandler(propsState)
}
