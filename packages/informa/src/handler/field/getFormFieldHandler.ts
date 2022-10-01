import { FormProps } from '../../props/FormProps'
import { defaultToTextResolver } from '../base/defaultToTextResolver'
import { getFormHandler } from '../base/getFormHandler'
import { ToTextResolverFn } from '../base/ToTextResolverFn'
import { ToTypeResolverFn } from '../base/ToTypeResolverFn'
import { defaultMergeFn } from './defaultMergeFn'
import { FormFieldGetFn } from './FormFieldGetFn'
import { FormFieldHandler } from './FormFieldHandler'
import { FormFieldSetFn } from './FormFieldSetFn'
import { MergeFn } from './MergeFn'
import { RegisterToComponent } from './RegisterToComponent'
import { RegisterToInput } from './RegisterToInput'

/**
 * Generate {@link FormFieldHandler} from given {@link FormProps}
 *
 * @param props
 * @param mergeFn
 * @returns
 */
export function getFormFieldHandler<T>(
  props: FormProps<T>,
  mergeFn?: MergeFn<T>
): FormFieldHandler<T> {
  const { value, setValue, pass, passComponent, key } = getFormHandler(props)

  const mergeValueFn = mergeFn ?? defaultMergeFn

  const getField: FormFieldGetFn<T> = (propKey, defaultFieldValue) =>
    value !== undefined && value[propKey] !== undefined
      ? value[propKey]
      : defaultFieldValue
  const setField: FormFieldSetFn<T> = (propKey, newFieldValue) =>
    setValue(mergeValueFn(value, propKey, newFieldValue))

  const register: RegisterToInput<T> = <K extends keyof T>(
    propKey: K,
    toTypeResolver: ToTypeResolverFn<T[K]>,
    toTextResolver?: ToTextResolverFn<T[K]>
  ) => {
    const toTextResolverFn: ToTextResolverFn<T[K]> =
      toTextResolver ?? defaultToTextResolver
    return {
      value: toTextResolverFn(getField(propKey)),
      onChange: (event) => setField(propKey, toTypeResolver(event)),
    }
  }
  const registerComponent: RegisterToComponent<T> = (propKey) => ({
    value: getField(propKey),
    onChange: (fieldValue) => setField(propKey, fieldValue),
  })

  return {
    value,
    setValue,
    pass,
    passComponent,
    key,
    getField,
    setField,
    register,
    registerComponent,
  }
}
