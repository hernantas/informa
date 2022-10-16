import { Action } from '../../type/Action'

export interface LockedState {
  locked: boolean
  lock: Action
  unlock: Action
}
