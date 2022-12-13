import { MergeFn } from '../../util/merge/MergeFn'
import { mergeObject } from '../../util/merge/mergeObject'
import { FormProps } from '../../props/FormProps'
import { resolveToText } from '../../util/resolver/resolveToText'
import { getFormHandler } from '../getFormHandler'
import { FormGroupGetFn } from './FormGroupGetFn'
import { FormGroupHandler } from './FormGroupHandler'
import { FormGroupSetFn } from './FormGroupSetFn'
import { RegisterToComponent } from './RegisterToComponent'
import { RegisterToHtml } from './RegisterToHtml'

/**
 * Generate {@link FormGroupHandler} from given {@link FormProps}
 *
 * @param props
 * @param mergeFn
 * @returns
 */
export function getFormGroupHandler<T>(
  props: FormProps<T>,
  mergeFn?: MergeFn<T>
): FormGroupHandler<T> {
  const { value, setValue, pass, passComponent, key } = getFormHandler(props)

  const mergeValueFn: MergeFn<T> = mergeFn ?? mergeObject

  const getField: FormGroupGetFn<T> = (propKey, defaultFieldValue) =>
    value !== undefined && value[propKey] !== undefined
      ? value[propKey]
      : defaultFieldValue
  const setField: FormGroupSetFn<T> = (propKey, newFieldValue) =>
    setValue(mergeValueFn(value, propKey, newFieldValue))

  const register: RegisterToHtml<T> = (key, toTypeResolver, toTextResolver) => {
    const toTextResolverFn = toTextResolver ?? resolveToText
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
