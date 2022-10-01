import { DeepPartial } from '../../type/DeepPartial'
import { ToTextResolverFn } from './ToTextResolverFn'

/**
 * Default implementation of {@link ToTextResolverFn} that transform partial
 * `<T>` into value that can accepted by {@link HTMLInputElement}
 *
 * @param value
 * @returns
 */
export function defaultToTextResolver<T>(
  value: DeepPartial<T> | undefined
): string | ReadonlyArray<string> | number | undefined {
  return value !== undefined ? String(value) : ''
}
