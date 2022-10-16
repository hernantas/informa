import { getFormHandler } from '../handler/getFormHandler'
import { FormProps } from '../props/FormProps'
import { useValue } from '../state/value/useValue'
import { FormControl } from './FormControl'

export function useFormControl<T>(props?: FormProps<T>): FormControl<T> {
  const valueState = useValue(props?.value)

  const { value, setValue, pass, passComponent, key } = getFormHandler({
    value: valueState.value,
    onChange: valueState.setValue,
  })

  return {
    value,
    setValue,
    pass,
    passComponent,
    key,
  }
}
