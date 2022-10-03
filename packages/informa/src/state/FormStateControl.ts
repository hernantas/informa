import { ChangeFn } from '../props/ChangeFn'
import { CreateSubmit } from './type/CreateSubmit'
import { StateCheck } from './type/StateCheck'

export interface FormStateControl<T> {
  setValue: ChangeFn<T>
  isLocked: StateCheck
  createSubmit: CreateSubmit<T>
}
