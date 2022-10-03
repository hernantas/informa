import { DeepPartial } from '../../type/DeepPartial'

export interface FormStateAction<T> {
  type: 'lock' | 'unlock' | 'setValue'
  value?: DeepPartial<T> | undefined
}
