import { getFormHandler } from '../handler/getFormHandler'
import { FormProps } from '../props/FormProps'
import { useFormState } from '../state/useFormState'
import { FormController } from './FormController'

export function useFormController<T>(props?: FormProps<T>): FormController<T> {
  const formState = useFormState<T>(props)
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
