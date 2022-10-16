import { useState } from 'react'
import { Action } from '../../type/Action'
import { LockedState } from './LockedState'

export function useLocked(): LockedState {
  const [locked, setLocked] = useState(false)

  const lock: Action = () => setLocked(true)
  const unlock: Action = () => setLocked(false)

  return {
    locked,
    lock,
    unlock,
  }
}
