import { FormFieldController } from './controller/field/FormFieldController'
import { useFieldController } from './controller/field/useFieldController'
import { FormProps } from './props/FormProps'

/**
 * Function alias for {@link useFieldController}
 *
 * @param props
 * @returns
 */
export function useForm<T>(props?: FormProps<T>): FormFieldController<T> {
  return useFieldController(props)
}
