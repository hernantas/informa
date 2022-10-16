import { Action } from '../../type/Action'
import { StateCheck } from '../../type/StateCheck'

export interface LockedState {
  isLocked: StateCheck
  lock: Action
  unlock: Action
}
