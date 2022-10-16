import { useState } from 'react'
import { DeepPartial } from '../../type/DeepPartial'
import { ValueState } from './ValueState'

export function useValue<T>(
  initialValue?: DeepPartial<T> | undefined
): ValueState<T> {
  const [value, setValue] = useState(initialValue)
  return {
    value,
    setValue,
  }
}
