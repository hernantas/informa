import { Action } from '../type/Action'
import { ChangeFn } from '../type/ChangeFn'
import { resolveToText } from '../util/resolver/resolveToText'
import { ToTextResolverFn } from '../util/resolver/ToTextResolverFn'
import { FormHandler } from './FormHandler'
import { FormProps } from './FormProps'
import { PassToComponent } from './PassToComponent'
import { PassToHtml } from './PassToHtml'

/**
 * Generate {@link FormHandler} from given {@link FormProps}
 *
 * @param props
 * @returns
 */
export function getFormHandler<T>(props: FormProps<T>): FormHandler<T> {
  const { value, key } = props

  const dirty = props.dirty ?? false
  const markDirty: Action = props.markDirty ?? (() => void 0)
  const resetDirty: Action = props.resetDirty ?? (() => void 0)
  const touched = props.touched ?? false
  const markTouched: Action = props.markTouched ?? (() => void 0)
  const resetTouched: Action = props.resetTouched ?? (() => void 0)

  const setValue: ChangeFn<T> = (newValue) => {
    props.setValue?.call(undefined, newValue)
    markDirty()
  }

  const reset: Action = () => {
    resetDirty()
    resetTouched()
  }

  const pass: PassToHtml<T> = (toTypeResolver, toTextResolver) => {
    const toTextResolverFn: ToTextResolverFn<T> =
      toTextResolver ?? resolveToText
    return {
      value: toTextResolverFn(value),
      onChange: (event) => setValue(toTypeResolver(event)),
      onBlur: () => markTouched(),
      key,
    }
  }

  const passComponent: PassToComponent<T> = () => ({
    key,
    value,
    setValue,
    dirty,
    markDirty,
    resetDirty,
    touched,
    markTouched,
    resetTouched,
  })

  return {
    key,
    value,
    setValue,
    dirty,
    markDirty,
    resetDirty,
    touched,
    markTouched,
    resetTouched,
    reset,
    pass,
    passComponent,
  }
}
