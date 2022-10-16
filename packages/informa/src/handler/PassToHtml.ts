import { FieldAttributes } from '../type/FieldAttributes'
import { ToTextResolverFn } from '../util/resolver/ToTextResolverFn'
import { ToTypeResolverFn } from '../util/resolver/ToTypeResolverFn'

/**
 * Function interface that takes value resolver function
 * ({@link ToTypeResolverFn} and {@link ToTextResolverFn}) and generate
 * {@link FieldAttributes}
 */
export interface PassToHtml<T> {
  <E>(
    toTypeResolver: ToTypeResolverFn<T, E>,
    toTextResolver?: ToTextResolverFn<T>
  ): FieldAttributes<E>
}
