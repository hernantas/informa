import { DirtyState } from './dirty/DirtyState'
import { ValueState } from './value/ValueState'

export interface FormState<T> extends ValueState<T>, DirtyState {}
