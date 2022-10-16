import { getFormArrayHandler } from '../../handler/array/getFormArrayHandler'
import { FormProps } from '../../props/FormProps'
import { useFormState } from '../../state/useFormState'
import { FormArrayControl } from './FormArrayControl'

export function useFormArrayControl<T>(
  props?: FormProps<T[]>
): FormArrayControl<T> {
  const formState = useFormState<T[]>(props?.value)
  const { isLocked, createSubmit } = formState

  const {
    value,
    setValue,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
    controllers,
    append,
    prepend,
    removeAt,
  } = getFormArrayHandler(formState)

  return {
    value,
    setValue,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
    controllers,
    append,
    prepend,
    removeAt,
    isLocked,
    createSubmit,
  }
}
