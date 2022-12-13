import { getFormArrayHandler } from '../../handler/array/getFormArrayHandler'
import { FormProps } from '../../props/FormProps'
import { useAction } from '../../state/action/useAction'
import { useValue } from '../../state/value/useValue'
import { FormArrayControl } from './FormArrayControl'

export function useFormArray<T>(props?: FormProps<T[]>): FormArrayControl<T> {
  const { value: stateValue, setValue: setStateValue } = useValue(props?.value)
  const { actionCount, isProcessing, isProcessed, clearAction, createAction } =
    useAction(stateValue)

  const {
    value,
    setValue,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
    handlers,
    append,
    prepend,
    removeAt,
  } = getFormArrayHandler({
    value: stateValue,
    onChange: setStateValue,
  })

  return {
    value,
    setValue,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
    handlers,
    append,
    prepend,
    removeAt,
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
