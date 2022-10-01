import { FormProps } from '../../props/FormProps'
import { DeepPartial } from '../../type/DeepPartial'
import { useFormProps } from '../../useFormProps'
import { FormFieldHandler } from '../field/FormFieldHandler'
import { getFieldHandler } from '../field/getFieldHandler'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'
import { defaultArrayMergeFn } from './defaultArrayMergeFn'
import { FormFieldArrayHandler } from './FormFieldArrayHandler'
import { FormFieldIndexedHandler } from './FormFieldIndexedHandler'
import { generateKey } from './generateKey'

/**
 * Generate {@link FormFieldArrayHandler} from given {@link FormProps}
 *
 * @param props
 * @param id
 * @returns
 */
export function getFieldArrayHandler<T>(
  props: FormProps<T[]>,
  id?: string
): FormFieldArrayHandler<T> {
  const {
    value,
    setValue,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
  } = getFieldHandler<T[]>(useFormProps(props), defaultArrayMergeFn)
  const values = value ?? []

  const controllers = values
    .map<FormProps<T>>((value, index) => ({
      value,
      onChange: (newFieldValue) => setField(index, newFieldValue),
    }))
    .map<FormFieldHandler<T>>((props) => getFieldHandler(props))
    .map<FormFieldIndexedHandler<T>>((controller, index) => ({
      ...controller,
      index,
      key: generateKey(index, id),
    }))

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
