import { FormProps } from '../../handler/FormProps'
import { getFormGroup } from '../../handler/group/getFormGroup'
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
    passHtml,
    pass,
    getField,
    setField,
    registerHtml: register,
    register: registerComponent,
  } = getFormGroup({
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
    getField,
    setField,
    registerHtml: register,
    register: registerComponent,
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
