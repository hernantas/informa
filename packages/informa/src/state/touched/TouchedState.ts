import { Action } from '../../type/Action'

export interface TouchedState {
  readonly touched: boolean
  readonly markTouched: Action
  readonly resetTouched: Action
}
