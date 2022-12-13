import { getFormArrayHandler } from '../../handler/array/getFormArrayHandler'
import { FormProps } from '../../handler/FormProps'
import { useAction } from '../../state/action/useAction'
import { useValue } from '../../state/value/useValue'
import { FormArrayControl } from './FormArrayControl'

export function useFormArray<T>(props?: FormProps<T[]>): FormArrayControl<T> {
  const valueState = useValue(props)
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
    removeAt,
  } = getFormArrayHandler({
    ...valueState,
  })

  const { actionCount, isProcessing, isProcessed, clearAction, createAction } =
    useAction(value)

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
    removeAt,
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
