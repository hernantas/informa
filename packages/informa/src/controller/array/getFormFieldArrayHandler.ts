import { FormProps } from '../../props/FormProps'
import { DeepPartial } from '../../type/DeepPartial'
import { useFormProps } from '../../useFormProps'
import { FormFieldHandler } from '../field/FormFieldHandler'
import { getFormFieldHandler } from '../field/getFormFieldHandler'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'
import { defaultArrayMergeFn } from './defaultArrayMergeFn'
import { FormFieldArrayHandler } from './FormFieldArrayHandler'
import { generateKey } from './generateKey'

/**
 * Generate {@link FormFieldArrayHandler} from given {@link FormProps}
 *
 * @param props
 * @returns
 */
export function getFormFieldArrayHandler<T>(
  props: FormProps<T[]>
): FormFieldArrayHandler<T> {
  const {
    value,
    setValue,
    pass,
    passComponent,
    key,
    getField,
    setField,
    register,
    registerComponent,
  } = getFormFieldHandler<T[]>(useFormProps(props), defaultArrayMergeFn)
  const values = value ?? []

  const controllers = values
    .map<FormProps<T>>((value, index) => ({
      value,
      onChange: (newFieldValue) => setField(index, newFieldValue),
    }))
    .map<FormFieldHandler<T>>((props, index) =>
      getFormFieldHandler({
        ...props,
        key: generateKey(index, key),
      })
    )

  const append: ArrayInsertFn<T> = (...newValues) =>
    setValue(values.concat(newValues.length > 0 ? newValues : [undefined]))
  const prepend: ArrayInsertFn<T> = (...newValues) =>
    setValue(
      (newValues.length > 0
        ? newValues
        : ([undefined] as (DeepPartial<T> | undefined)[])
      ).concat(values)
    )
  const removeAt: ArrayRemoveAtFn = (index: number) =>
    setValue(values.filter((_v, i) => i !== index))

  return {
    value,
    setValue,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
    controllers,
    append,
    prepend,
    removeAt,
  }
}
