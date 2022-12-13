import { FormProps } from '../../handler/FormProps'
import { getFormGroupHandler } from '../../handler/group/getFormGroupHandler'
import { useAction } from '../../state/action/useAction'
import { useDirty } from '../../state/dirty/useDirty'
import { useValue } from '../../state/value/useValue'
import { FormGroupControl } from './FormGroupControl'

export function useFormGroup<T>(props?: FormProps<T>): FormGroupControl<T> {
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
  } = getFormGroupHandler({
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
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
