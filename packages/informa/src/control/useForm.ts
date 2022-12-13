import { getFormHandler } from '../handler/getFormHandler'
import { FormProps } from '../props/FormProps'
import { useAction } from '../state/action/useAction'
import { useValue } from '../state/value/useValue'
import { FormControl } from './FormControl'

export function useForm<T>(props?: FormProps<T>): FormControl<T> {
  const { value: stateValue, setValue: setStateValue } = useValue(props?.value)
  const { actionCount, isProcessing, isProcessed, clearAction, createAction } =
    useAction(stateValue)

  const { value, setValue, pass, passComponent, key } = getFormHandler({
    value: stateValue,
    onChange: setStateValue,
  })

  return {
    value,
    setValue,
    pass,
    passComponent,
    key,
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
