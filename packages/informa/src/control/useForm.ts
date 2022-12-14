import { FormProps } from '../handler/FormProps'
import { getForm } from '../handler/getForm'
import { useAction } from '../state/action/useAction'
import { useDirty } from '../state/dirty/useDirty'
import { useError } from '../state/error/useError'
import { useTouched } from '../state/touched/useTouched'
import { useValue } from '../state/value/useValue'
import { FormControl } from './FormControl'

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
    passHtml,
    pass,
  } = getForm({
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
    passHtml,
    pass,
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
