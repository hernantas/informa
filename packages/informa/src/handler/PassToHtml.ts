import { FormElementAttributes } from '../props/FormElementAttributes'
import { ToTextResolverFn } from './ToTextResolverFn'
import { ToTypeResolverFn } from './ToTypeResolverFn'

/**
 * Function interface that takes value resolver function
 * ({@link ToTypeResolverFn} and {@link ToTextResolverFn}) and generate
 * {@link FormElementAttributes}
 */
export interface PassToHtml<T> {
  <E>(
    toTypeResolver: ToTypeResolverFn<T, E>,
    toTextResolver?: ToTextResolverFn<T>
  ): FormElementAttributes<E>
}
