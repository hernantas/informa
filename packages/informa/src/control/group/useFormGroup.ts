import { getFormGroupHandler } from '../../handler/group/getFormGroupHandler'
import { FormProps } from '../../props/FormProps'
import { useAction } from '../../state/action/useAction'
import { useValue } from '../../state/value/useValue'
import { FormGroupControl } from './FormGroupControl'

export function useFormGroup<T>(props?: FormProps<T>): FormGroupControl<T> {
  const { value: stateValue, setValue: setStateValue } = useValue(props?.value)
  const { actionCount, isProcessing, isProcessed, clearAction, createAction } =
    useAction(stateValue)

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
    value: stateValue,
    onChange: setStateValue,
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
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
