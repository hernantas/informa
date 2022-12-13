import { getFormHandler } from '../handler/getFormHandler'
import { FormProps } from '../handler/FormProps'
import { useAction } from '../state/action/useAction'
import { useValue } from '../state/value/useValue'
import { FormControl } from './FormControl'
import { useDirty } from '../state/dirty/useDirty'
import { useTouched } from '../state/touched/useTouched'
import { useError } from '../state/error/useError'

export function useForm<T>(props?: FormProps<T>): FormControl<T> {
  const valueState = useValue(props)
  const dirtyState = useDirty(props)
  const touchedState = useTouched(props)
  const errorState = useError(props)

  const {
    key,
    value,
    setValue,
    dirty,
    markDirty,
    resetDirty,
    touched,
    markTouched,
    resetTouched,
    error,
    setError,
    clearError,
    reset,
    pass,
    passComponent,
  } = getFormHandler({
    ...valueState,
    ...dirtyState,
    ...touchedState,
    ...errorState,
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
    touched,
    markTouched,
    resetTouched,
    error,
    setError,
    clearError,
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
