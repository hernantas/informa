import { ChangeFn } from '../props/ChangeFn'
import { FormProps } from '../props/FormProps'
import { CreateAction } from './CreateAction'
import { StateCheck } from './StateCheck'

export interface FormState<T> extends FormProps<T> {
  setValue: ChangeFn<T>
  isLocked: StateCheck
  createSubmit: CreateAction<T>
}
