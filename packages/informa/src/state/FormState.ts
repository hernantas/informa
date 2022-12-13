import { DirtyState } from './dirty/DirtyState'
import { ErrorState } from './error/ErrorState'
import { TouchedState } from './touched/TouchedState'
import { ValueState } from './value/ValueState'

export interface FormState<T>
  extends ValueState<T>,
    DirtyState,
    TouchedState,
    ErrorState {}
