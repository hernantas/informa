import { useState } from 'react'
import { Action } from '../../type/Action'
import { StateCheck } from '../../type/StateCheck'
import { LockedState } from './LockedState'

export function useLocked(): LockedState {
  const [locked, setLocked] = useState(false)

  const isLocked: StateCheck = () => locked
  const lock: Action = () => setLocked(true)
  const unlock: Action = () => setLocked(false)

  return {
    isLocked,
    lock,
    unlock,
  }
}
