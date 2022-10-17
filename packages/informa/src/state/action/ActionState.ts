import { Action } from '../../type/Action'
import { StateCheck } from '../../type/StateCheck'
import { CreateAction } from './CreateAction'

export interface ActionState<T> {
  actionCount: number
  isProcessing: StateCheck
  isProcessed: StateCheck
  clearAction: Action
  createAction: CreateAction<T>
}
