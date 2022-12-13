import { useState } from 'react'
import { ChangeFn } from '../../type/ChangeFn'
import { ValueState } from './ValueState'

export function useValue<T>(state?: Partial<ValueState<T>>): ValueState<T> {
  const [value, dispatch] = useState(state?.value)

  const setValue: ChangeFn<T> = (newValue) => {
    dispatch(newValue)
    state?.setValue?.call(undefined, newValue)
  }

  return {
    value,
    setValue,
  }
}
