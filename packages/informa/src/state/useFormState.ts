import { useReducer } from 'react'
import { ChangeFn } from '../props/ChangeFn'
import { DeepPartial } from '../type/DeepPartial'
import { CreateSubmit } from './type/CreateSubmit'
import { FormStateProps } from './FormStateProps'
import { formStateReducer } from './reducer/formStateReducer'

export function useFormState<T>(
  initialValue?: DeepPartial<T> | undefined
): FormStateProps<T> {
  const [state, setState] = useReducer(formStateReducer, {
    locked: false,
    value: initialValue,
  })

  const setValue: ChangeFn<T> = (newValue) =>
    setState({ type: 'setValue', value: newValue })
  const onChange: ChangeFn<T> = setValue
  const isLocked = () => state.locked
  const createSubmit: CreateSubmit<T> = (handler) => () => {
    if (!state.locked) {
      Promise.resolve(state.value)
        .finally(() => setState({ type: 'lock' }))
        .then(handler)
        .finally(() => setState({ type: 'unlock' }))
    }
  }

  return {
    value: state.value,
    onChange,
    setValue,
    isLocked,
    createSubmit,
  }
}
