import { CreateSubmit } from './type/CreateSubmit'
import { StateCheck } from './type/StateCheck'

export interface FormStateControl<T> {
  isLocked: StateCheck
  createSubmit: CreateSubmit<T>
}
