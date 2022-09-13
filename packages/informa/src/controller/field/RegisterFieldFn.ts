import { InputHTMLAttributes } from 'react'
import { ToTextResolverFn } from '../base/ToTextResolverFn'
import { ToTypeResolverFn } from '../base/ToTypeResolverFn'

/**
 * Function interface that takes value resolver function
 * ({@link ToTypeResolverFn} and {@link ToTextResolverFn}) and generate
 * {@link InputHTMLAttributes} of {@link HTMLInputElement} that handle (its value
 * and handler) property of `<T>` value
 */
export interface RegisterFieldFn<T> {
  <K extends keyof T>(
    key: K,
    toTypeResolver: ToTypeResolverFn<T[K]>,
    toTextResolver?: ToTextResolverFn<T[K]>
  ): InputHTMLAttributes<HTMLInputElement>
}
