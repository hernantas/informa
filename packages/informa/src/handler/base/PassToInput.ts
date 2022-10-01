import { InputHTMLAttributes } from 'react'
import { ToTextResolverFn } from './ToTextResolverFn'
import { ToTypeResolverFn } from './ToTypeResolverFn'

/**
 * Function interface that takes value resolver function
 * ({@link ToTypeResolverFn} and {@link ToTextResolverFn}) and generate
 * {@link InputHTMLAttributes} of {@link HTMLInputElement}
 */
export interface PassToInput<T> {
  (
    toTypeResolver: ToTypeResolverFn<T>,
    toTextResolver?: ToTextResolverFn<T>
  ): InputHTMLAttributes<HTMLInputElement>
}
