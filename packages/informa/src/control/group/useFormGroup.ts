import { getFormGroupHandler } from '../../handler/group/getFormGroupHandler'
import { FormProps } from '../../handler/FormProps'
import { useAction } from '../../state/action/useAction'
import { useValue } from '../../state/value/useValue'
import { FormGroupControl } from './FormGroupControl'

export function useFormGroup<T>(props?: FormProps<T>): FormGroupControl<T> {
  const valueState = useValue(props)
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
    ...valueState,
  })

  const { actionCount, isProcessing, isProcessed, clearAction, createAction } =
    useAction(value)

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
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
