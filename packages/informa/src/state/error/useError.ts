import { useState } from 'react'
import { Action } from '../../type/Action'
import { ErrorState } from './ErrorState'

export function useError(state?: Partial<ErrorState>): ErrorState {
  const [error, setError] = useState(state?.error)
  const clearError: Action = () => setError(undefined)

  return {
    error,
    setError,
    clearError,
  }
}
