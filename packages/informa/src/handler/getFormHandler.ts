import { ChangeFn } from '../props/ChangeFn'
import { FormProps } from '../props/FormProps'
import { defaultToTextResolver } from './defaultToTextResolver'
import { FormHandler } from './FormHandler'
import { PassToComponent } from './PassToComponent'
import { PassToInput } from './PassToInput'
import { ToTextResolverFn } from './ToTextResolverFn'

/**
 * Generate {@link FormHandler} from given {@link FormProps}
 *
 * @param props
 * @returns
 */
export function getFormHandler<T>(
  props: FormProps<T>
): FormHandler<T> {
  const { value, onChange, key } = props

  const setValue: ChangeFn<T> = (newValue) =>
    onChange !== undefined ? onChange(newValue) : void 0

  const pass: PassToInput<T> = (toTypeResolver, toTextResolver) => {
    const toTextResolverFn: ToTextResolverFn<T> =
      toTextResolver ?? defaultToTextResolver
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
