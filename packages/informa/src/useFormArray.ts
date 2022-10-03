import { FormArrayController } from './controller/array/FormArrayController'
import { useFormArrayController } from './controller/array/useFormArrayController'
import { getFormArrayHandler } from './handler/array/getFormArrayHandler'
import { FormProps } from './props/FormProps'

/**
 * Create controller (similar with {@link getFormArrayHandler}) that manage its
 * own state
 *
 * @param props
 * @returns
 */
export function useFormArray<T>(
  props?: FormProps<T[]>
): FormArrayController<T> {
  return useFormArrayController(props)
}
