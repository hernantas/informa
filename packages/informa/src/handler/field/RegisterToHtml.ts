import { FieldAttributes } from '../../type/FieldAttributes'
import { ToTextResolverFn } from '../../util/resolver/ToTextResolverFn'
import { ToTypeResolverFn } from '../../util/resolver/ToTypeResolverFn'

/**
 * Function interface that takes value resolver function
 * ({@link ToTypeResolverFn} and {@link ToTextResolverFn}) and generate
 * {@link FieldAttributes} that handle (its value and handler) property of `<T>`
 * value
 */
export interface RegisterToHtml<T> {
  <K extends keyof T, E>(
    key: K,
    toTypeResolver: ToTypeResolverFn<T[K], E>,
    toTextResolver?: ToTextResolverFn<T[K]>
  ): FieldAttributes<E>
}
