import { FormElementAttributes } from '../../props/FormElementAttributes'
import { ToTextResolverFn } from '../../resolver/ToTextResolverFn'
import { ToTypeResolverFn } from '../../resolver/ToTypeResolverFn'

/**
 * Function interface that takes value resolver function
 * ({@link ToTypeResolverFn} and {@link ToTextResolverFn}) and generate
 * {@link FormElementAttributes} that handle (its value and handler) property of
 * `<T>` value
 */
export interface RegisterToHtml<T> {
  <K extends keyof T, E>(
    key: K,
    toTypeResolver: ToTypeResolverFn<T[K], E>,
    toTextResolver?: ToTextResolverFn<T[K]>
  ): FormElementAttributes<E>
}
