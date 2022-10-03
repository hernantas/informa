import { FormController } from './controller/FormController'
import { useFormController } from './controller/useFormController'
import { getFormHandler } from './handler/getFormHandler'
import { FormProps } from './props/FormProps'

/**
 * Create controller (similar with {@link getFormHandler}) that manage its own
 * state
 *
 * @param props
 * @returns
 */
export function useForm<T>(props?: FormProps<T>): FormController<T> {
  return useFormController(props)
}
