import { FormProps } from '../../handler/FormProps'
import { getFormGroupHandler } from '../../handler/group/getFormGroupHandler'
import { useAction } from '../../state/action/useAction'
import { useDirty } from '../../state/dirty/useDirty'
import { useError } from '../../state/error/useError'
import { useTouched } from '../../state/touched/useTouched'
import { useValue } from '../../state/value/useValue'
import { FormGroupControl } from './FormGroupControl'

export function useFormGroup<T>(props?: FormProps<T>): FormGroupControl<T> {
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
    getField,
    setField,
    register,
    registerComponent,
  } = getFormGroupHandler({
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
