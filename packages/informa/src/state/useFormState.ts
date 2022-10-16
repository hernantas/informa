import { useState } from 'react'
import { ChangeFn } from '../props/ChangeFn'
import { DeepPartial } from '../type/DeepPartial'
import { CreateSubmit } from './CreateSubmit'
import { FormState } from './FormState'

export function useFormState<T>(
  initialValue?: DeepPartial<T> | undefined
): FormState<T> {
  const [locked, setLocked] = useState(false)
  const [value, setValue] = useState<DeepPartial<T> | undefined>(initialValue)

  const onChange: ChangeFn<T> = setValue
  const isLocked = () => locked
  const createSubmit: CreateSubmit<T> = (handler) => () => {
    if (!locked) {
      Promise.resolve(value)
        .finally(() => setLocked(true))
        .then(handler)
        .finally(() => setLocked(false))
    }
  }

  return {
    value,
    onChange,
    setValue,
    isLocked,
    createSubmit,
  }
}
