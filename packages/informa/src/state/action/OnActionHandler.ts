import { DeepPartial } from '../../type/DeepPartial'

export interface OnActionHandler<T> {
  (value?: DeepPartial<T>): Promise<void>
}
