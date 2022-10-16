import { getFormArrayHandler } from '../../handler/array/getFormArrayHandler'
import { FormProps } from '../../props/FormProps'
import { useValue } from '../../state/value/useValue'
import { FormArrayControl } from './FormArrayControl'

export function useFormArrayControl<T>(
  props?: FormProps<T[]>
): FormArrayControl<T> {
  const valueState = useValue(props?.value)

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
  } = getFormArrayHandler({
    value: valueState.value,
    onChange: valueState.setValue,
  })

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
  }
}
