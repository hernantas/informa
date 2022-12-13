import { getFormArrayHandler } from '../../handler/array/getFormArrayHandler'
import { FormProps } from '../../handler/FormProps'
import { useAction } from '../../state/action/useAction'
import { useDirty } from '../../state/dirty/useDirty'
import { useValue } from '../../state/value/useValue'
import { FormArrayControl } from './FormArrayControl'

export function useFormArray<T>(props?: FormProps<T[]>): FormArrayControl<T> {
  const valueState = useValue(props)
  const dirtyState = useDirty(props)

  const {
    key,
    value,
    setValue,
    dirty,
    markDirty,
    resetDirty,
    reset,
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
    ...dirtyState,
  })

  const { actionCount, isProcessing, isProcessed, clearAction, createAction } =
    useAction(value)

  return {
    key,
    value,
    setValue,
    dirty,
    markDirty,
    resetDirty,
    reset,
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
