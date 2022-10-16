import { ToTextResolverFn } from './ToTextResolverFn'

/**
 * Default implementation of {@link ToTextResolverFn} that transform partial
 * `<T>` into a compatible value
 *
 * @param value
 * @returns
 */
export const resolveToText: ToTextResolverFn<unknown> = (value) =>
  value !== undefined ? String(value) : ''
