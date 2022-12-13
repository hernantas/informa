import { Action } from '../../type/Action'

export interface DirtyState {
  readonly dirty: boolean
  readonly markDirty: Action
  readonly resetDirty: Action
}
