import { useState } from 'react'
import { Action } from '../../type/Action'
import { DeepPartial } from '../../type/DeepPartial'
import { StateCheck } from '../../type/StateCheck'
import { ActionState } from './ActionState'
import { CreateAction } from './CreateAction'

export function useAction<T>(value?: DeepPartial<T>): ActionState<T> {
  const [lock, setLock] = useState(false)
  const [actionCount, setActionCount] = useState(0)

  const isProcessing: StateCheck = () => lock
  const isProcessed: StateCheck = () => actionCount > 0
  const clearAction: Action = () => setActionCount(0)
  const createAction: CreateAction<T> = (handler) => () => {
    if (!lock) {
      Promise.resolve(value)
        .finally(() => setLock(true))
        .then(handler)
        .finally(() => setLock(false))
    }
  }

  return {
    actionCount,
    isProcessing,
    isProcessed,
    clearAction,
    createAction,
  }
}
