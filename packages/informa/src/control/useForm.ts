import { getFormHandler } from '../handler/getFormHandler'
import { FormProps } from '../handler/FormProps'
import { useAction } from '../state/action/useAction'
import { useValue } from '../state/value/useValue'
import { FormControl } from './FormControl'

export function useForm<T>(props?: FormProps<T>): FormControl<T> {
  const valueState = useValue(props)
  const { value, setValue, pass, passComponent, key } = getFormHandler({
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
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
