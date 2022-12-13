import { ChangeFn } from '../props/ChangeFn'
import { FormProps } from '../props/FormProps'
import { resolveToText } from '../util/resolver/resolveToText'
import { ToTextResolverFn } from '../util/resolver/ToTextResolverFn'
import { FormHandler } from './FormHandler'
import { PassToComponent } from './PassToComponent'
import { PassToHtml } from './PassToHtml'

/**
 * Generate {@link FormHandler} from given {@link FormProps}
 *
 * @param props
 * @returns
 */
export function getFormHandler<T>(props: FormProps<T>): FormHandler<T> {
  const { value, onChange, key } = props

  const setValue: ChangeFn<T> = onChange ?? (() => void 0)

  const pass: PassToHtml<T> = (toTypeResolver, toTextResolver) => {
    const toTextResolverFn: ToTextResolverFn<T> =
      toTextResolver ?? resolveToText
    return {
      value: toTextResolverFn(value),
      onChange: (event) => setValue(toTypeResolver(event)),
      key,
    }
  }

  const passComponent: PassToComponent<T> = () => ({
    value,
    onChange: setValue,
    key,
  })

  return {
    value,
    setValue,
    pass,
    passComponent,
    key,
  }
}
