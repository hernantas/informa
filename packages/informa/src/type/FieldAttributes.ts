import { ChangeEventHandler, DOMAttributes } from 'react'

/** Interface for value that can be compatible with {@link HTMLElement} */
export interface FieldAttributes<T> extends DOMAttributes<T> {
  onChange?: ChangeEventHandler<T> | undefined
}
