import { FormFieldController } from './controller/field/FormFieldController'
import { getFieldController } from './controller/field/getFieldController'
import { FormProps } from './props/FormProps'
import { useFormProps } from './useFormProps'

/**
 * Create controller (similar with {@link getFieldController}) that manage its
 * own state
 *
 * @param props
 * @returns
 */
export function useForm<T>(props?: FormProps<T>): FormFieldController<T> {
  const propsState = useFormProps(props)
  return getFieldController(propsState)
}
