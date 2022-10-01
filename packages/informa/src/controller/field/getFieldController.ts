import { defaultToTextResolver } from '../base/defaultToTextResolver'
import { getFormHandler } from '../base/getFormHandler'
import { ToTextResolverFn } from '../base/ToTextResolverFn'
import { ToTypeResolverFn } from '../base/ToTypeResolverFn'
import { defaultMergeFn } from './defaultMergeFn'
import { FormFieldHandler } from './FormFieldHandler'
import { FormFieldGetFn } from './FormFieldGetFn'
import { FormFieldSetFn } from './FormFieldSetFn'
import { MergeFn } from './MergeFn'
import { FormProps } from '../../props/FormProps'
import { RegisterComponentFn } from './RegisterComponentFn'
import { RegisterFieldFn } from './RegisterFieldFn'

/**
 * Generate {@link FormFieldHandler} from given {@link FormProps}
 *
 * @param props
 * @param mergeFn
 * @returns
 */
export function getFieldController<T>(
  props: FormProps<T>,
  mergeFn?: MergeFn<T>
): FormFieldHandler<T> {
  const { value, setValue, pass, passComponent } = getFormHandler(props)

  const mergeValueFn = mergeFn ?? defaultMergeFn

  const getField: FormFieldGetFn<T> = (key, defaultFieldValue) =>
    value !== undefined && value[key] !== undefined
      ? value[key]
      : defaultFieldValue
  const setField: FormFieldSetFn<T> = (key, newFieldValue) =>
    setValue(mergeValueFn(value, key, newFieldValue))

  const register: RegisterFieldFn<T> = <K extends keyof T>(
    key: K,
    toTypeResolver: ToTypeResolverFn<T[K]>,
    toTextResolver?: ToTextResolverFn<T[K]>
  ) => {
    const toTextResolverFn: ToTextResolverFn<T[K]> =
      toTextResolver ?? defaultToTextResolver
    return {
      value: toTextResolverFn(getField(key)),
      onChange: (event) => setField(key, toTypeResolver(event)),
    }
  }
  const registerComponent: RegisterComponentFn<T> = (key) => ({
    value: getField(key),
    onChange: (fieldValue) => setField(key, fieldValue),
  })

  return {
    value,
    setValue,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
  }
}
