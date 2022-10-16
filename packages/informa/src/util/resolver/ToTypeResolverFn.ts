import { ChangeEvent } from 'react'
import { DeepPartial } from '../../type/DeepPartial'

/**
 * Function interface that takes {@link ChangeEvent} and convert it into partial
 * `<T>` value
 */
export interface ToTypeResolverFn<T, E> {
  (event: ChangeEvent<E>): DeepPartial<T> | undefined
}
