import { FormHandler } from './FormHandler'
import { PassToComponent } from './PassToComponent'
import { PassFieldFn } from './PassFieldFn'
import { ToTextResolverFn } from './ToTextResolverFn'
import { defaultToTextResolver } from './defaultToTextResolver'
import { ChangeFn } from '../../props/ChangeFn'
import { FormProps } from '../../props/FormProps'

/**
 * Generate {@link FormHandler} from given {@link FormProps}
 *
 * @param props
 * @returns
 */
export function getFormHandler<T>(props: FormProps<T>): FormHandler<T> {
  const { value, onChange } = props

  const setValue: ChangeFn<T> = (newValue) =>
    onChange !== undefined ? onChange(newValue) : void 0

  const pass: PassFieldFn<T> = (toTypeResolver, toTextResolver) => {
    const toTextResolverFn: ToTextResolverFn<T> =
      toTextResolver ?? defaultToTextResolver
    return {
      value: toTextResolverFn(value),
      onChange: (event) => setValue(toTypeResolver(event)),
    }
  }

  const passComponent: PassToComponent<T> = () => ({
    value,
    onChange: setValue,
  })

  return {
    value,
    setValue,
    pass,
    passComponent,
  }
}
