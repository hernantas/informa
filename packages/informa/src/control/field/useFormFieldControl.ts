import { getFormFieldHandler } from '../../handler/field/getFormFieldHandler'
import { FormProps } from '../../props/FormProps'
import { useValue } from '../../state/value/useValue'
import { FormFieldControl } from './FormFieldControl'

export function useFormFieldControl<T>(
  props?: FormProps<T>
): FormFieldControl<T> {
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
  } = getFormFieldHandler({
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
