import { useState } from 'react'
import { Action } from '../../type/Action'
import { DirtyState } from './DirtyState'

export function useDirty(state?: Partial<DirtyState>): DirtyState {
  const [dirty, setDirty] = useState(state?.dirty ?? false)
  const markDirty: Action = () => {
    setDirty(true)
    state?.markDirty?.call(undefined)
  }
  const resetDirty: Action = () => {
    setDirty(false)
    state?.resetDirty?.call(undefined)
  }

  return {
    dirty,
    markDirty,
    resetDirty,
  }
}
