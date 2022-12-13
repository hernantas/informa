import { Dispatch, SetStateAction } from 'react'
import { Action } from '../../type/Action'

export interface ErrorState {
  readonly error?: unknown
  readonly setError: Dispatch<SetStateAction<unknown>>
  readonly clearError: Action
}
