import { useState } from 'react'
import { Action } from '../../type/Action'
import { TouchedState } from './TouchedState'

export function useTouched(state?: Partial<TouchedState>): TouchedState {
  const [touched, setTouched] = useState(state?.touched ?? false)
  const markTouched: Action = () => {
    setTouched(true)
    state?.markTouched?.call(undefined)
  }
  const resetTouched: Action = () => {
    setTouched(false)
    state?.resetTouched?.call(undefined)
  }
  return {
    touched,
    markTouched,
    resetTouched,
  }
}
