import { FormProps } from '../../props/FormProps'
import { defaultToTextResolver } from '../defaultToTextResolver'
import { getFormHandler } from '../getFormHandler'
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

  const register: RegisterToInput<T> = (
    key,
    toTypeResolver,
    toTextResolver
  ) => {
    const toTextResolverFn = toTextResolver ?? defaultToTextResolver
    return {
      value: toTextResolverFn(getField(key)),
      onChange: (event) => setField(key, toTypeResolver(event)),
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
