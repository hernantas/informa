import { FormFieldControl } from '../control/field/FormFieldControl'
import { useFormFieldControl } from '../control/field/useFormFieldControl'
import { LockedState } from '../state/locked/LockedState'
import { useLocked } from '../state/locked/useLocked'
import { DeepPartial } from '../type/DeepPartial'
import { CreateAction } from './CreateAction'

export interface FormController<T> extends FormFieldControl<T>, LockedState {
  createSubmit: CreateAction<T>
}

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

  const { isLocked, lock, unlock } = useLocked()

  const createSubmit: CreateAction<T> = (handler) => () => {
    if (!isLocked()) {
      Promise.resolve(value)
        .finally(() => lock())
        .then(handler)
        .finally(() => unlock())
    }
  }

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
    isLocked,
    lock,
    unlock,
    createSubmit,
  }
}
