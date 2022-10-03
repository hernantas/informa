import { FormStateAction } from './FormStateAction'
import { FormState } from '../FormState'

export function formStateReducer<T>(
  state: FormState<T>,
  action: FormStateAction<T>
): FormState<T> {
  const { type, value } = action
  switch (type) {
    case 'lock':
      return {
        ...state,
        locked: true,
      }

    case 'unlock':
      return {
        ...state,
        locked: false,
      }
    case 'setValue':
      return {
        ...state,
        value,
      }
  }
}
