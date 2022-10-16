import { DeepPartial } from '../type/DeepPartial'

export interface OnSubmitHandler<T> {
  (value?: DeepPartial<T>): Promise<void>
}
