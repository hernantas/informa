import { getFormGroupHandler } from '../../handler/group/getFormGroupHandler'
import { FormProps } from '../../props/FormProps'
import { useValue } from '../../state/value/useValue'
import { FormGroupControl } from './FormGroupControl'

export function useFormGroupControl<T>(
  props?: FormProps<T>
): FormGroupControl<T> {
  const valueState = useValue(props?.value)

  const {
    value,
    setValue,
    pass,
    passComponent,
    key,
    getField,
    setField,
    register,
    registerComponent,
  } = getFormGroupHandler({
    value: valueState.value,
    onChange: valueState.setValue,
  })

  return {
    value,
    setValue,
    pass,
    passComponent,
    key,
    getField,
    setField,
    register,
    registerComponent,
  }
}
