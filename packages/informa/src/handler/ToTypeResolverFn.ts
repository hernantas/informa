import { ChangeEvent } from 'react'
import { DeepPartial } from '../type/DeepPartial'

/**
 * Function interface that takes {@link ChangeEvent} of {@link HTMLInputElement}
 * and convert it into partial `<T>` value
 */
export interface ToTypeResolverFn<T> {
  (event: ChangeEvent<HTMLInputElement>): DeepPartial<T> | undefined
}
