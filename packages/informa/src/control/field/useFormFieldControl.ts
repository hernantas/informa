import { getFormFieldHandler } from '../../handler/field/getFormFieldHandler'
import { FormProps } from '../../props/FormProps'
import { useFormState } from '../../state/useFormState'
import { FormFieldControl } from './FormFieldControl'

export function useFormFieldControl<T>(
  props?: FormProps<T>
): FormFieldControl<T> {
  const formState = useFormState<T>(props?.value)
  const { isLocked, createSubmit } = formState

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
  } = getFormFieldHandler(formState)

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
    isLocked,
    createSubmit,
  }
}
