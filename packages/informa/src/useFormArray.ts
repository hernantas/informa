import { FormArrayControl } from './control/array/FormArrayControl'
import { useFormArrayControl } from './control/array/useFormArrayControl'
import { getFormArrayHandler } from './handler/array/getFormArrayHandler'
import { FormProps } from './props/FormProps'

/**
 * Create controller (similar with {@link getFormArrayHandler}) that manage its
 * own state
 *
 * @param props
 * @returns
 */
export function useFormArray<T>(props?: FormProps<T[]>): FormArrayControl<T> {
  return useFormArrayControl(props)
}
