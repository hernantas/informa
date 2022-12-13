import { getFormHandler } from '../handler/getFormHandler'
import { FormProps } from '../handler/FormProps'
import { useAction } from '../state/action/useAction'
import { useValue } from '../state/value/useValue'
import { FormControl } from './FormControl'
import { useDirty } from '../state/dirty/useDirty'

export function useForm<T>(props?: FormProps<T>): FormControl<T> {
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
  } = getFormHandler({
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
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
