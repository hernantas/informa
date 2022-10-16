import { getFormHandler } from '../handler/getFormHandler'
import { FormProps } from '../props/FormProps'
import { useFormState } from '../state/useFormState'
import { FormControl } from './FormControl'

export function useFormControl<T>(props?: FormProps<T>): FormControl<T> {
  const formState = useFormState<T>(props?.value)
  const { isLocked, createSubmit } = formState

  const { value, setValue, pass, passComponent, key } =
    getFormHandler(formState)

  return {
    value,
    setValue,
    pass,
    passComponent,
    key,
    isLocked,
    createSubmit,
  }
}
