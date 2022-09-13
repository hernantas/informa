import { FormController } from './FormController'
import { PassComponentFn } from './PassComponentFn'
import { PassFieldFn } from './PassFieldFn'
import { ToTextResolverFn } from './ToTextResolverFn'
import { defaultToTextResolver } from './defaultToTextResolver'
import { ChangeFn } from '../../props/ChangeFn'
import { FormProps } from '../../props/FormProps'

/**
 * Generate {@link FormController} from given {@link FormProps}
 *
 * @param props
 * @returns
 */
export function getController<T>(props: FormProps<T>): FormController<T> {
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

  const passComponent: PassComponentFn<T> = () => ({
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
