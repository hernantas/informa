import { useFormFieldControl } from '../control/field/useFormFieldControl'
import { useAction } from '../state/action/useAction'
import { DeepPartial } from '../type/DeepPartial'
import { FormController } from './FormController'

export function useForm<T>(initialValue?: DeepPartial<T>): FormController<T> {
  const {
    value,
    setValue,
    pass,
    passComponent,
    key,
    getField,
    setField,
    register,
    registerComponent,
  } = useFormFieldControl({
    value: initialValue,
  })

  const { actionCount, isProcessing, isProcessed, clearAction, createAction } =
    useAction(value)

  return {
    value,
    setValue,
    pass,
    passComponent,
    key,
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
