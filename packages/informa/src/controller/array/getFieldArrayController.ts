import { FormProps } from '../../props/FormProps'
import { DeepPartial } from '../../type/DeepPartial'
import { useFormProps } from '../../useFormProps'
import { FormFieldController } from '../field/FormFieldController'
import { getFieldController } from '../field/getFieldController'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'
import { defaultArrayMergeFn } from './defaultArrayMergeFn'
import { FormFieldArrayController } from './FormFieldArrayController'
import { FormIndexedFieldController } from './FormIndexedFieldController'
import { generateKey } from './generateKey'

/**
 * Generate {@link FormFieldArrayController} from given {@link FormProps}
 *
 * @param props
 * @param id
 * @returns
 */
export function getFieldArrayController<T>(
  props: FormProps<T[]>,
  id?: string
): FormFieldArrayController<T> {
  const {
    value,
    setValue,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
  } = getFieldController<T[]>(useFormProps(props), defaultArrayMergeFn)
  const values = value ?? []

  const controllers = values
    .map<FormProps<T>>((value, index) => ({
      value,
      onChange: (newFieldValue) => setField(index, newFieldValue),
    }))
    .map<FormFieldController<T>>((props) => getFieldController(props))
    .map<FormIndexedFieldController<T>>((controller, index) => ({
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
