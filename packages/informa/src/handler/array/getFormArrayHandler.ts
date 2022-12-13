import { generateKey } from '../../util/generateKey'
import { mergeArray } from '../../util/merge/mergeArray'
import { FormProps } from '../FormProps'
import { FormGroupHandler } from '../group/FormGroupHandler'
import { getFormGroupHandler } from '../group/getFormGroupHandler'
import { ArrayInsertFn } from './ArrayInsertFn'
import { ArrayRemoveAtFn } from './ArrayRemoveAtFn'
import { FormArrayHandler } from './FormArrayHandler'

/**
 * Generate {@link FormArrayHandler} from given {@link FormProps}
 *
 * @param props
 * @returns
 */
export function getFormArrayHandler<T>(
  props: FormProps<T[]>
): FormArrayHandler<T> {
  const {
    key,
    value,
    setValue,
    dirty,
    markDirty,
    resetDirty,
    touched,
    markTouched,
    resetTouched,
    error,
    setError,
    clearError,
    reset,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
  } = getFormGroupHandler<T[]>(props, mergeArray)
  const values = value ?? []

  const handlers = values
    .map<FormProps<T>>((value, index) => ({
      value,
      setValue: (newFieldValue) => setField(index, newFieldValue),
      dirty,
      markDirty,
      resetDirty,
      touched,
      markTouched,
      resetTouched,
      error,
      setError,
      clearError,
    }))
    .map<FormGroupHandler<T>>((props, index) =>
      getFormGroupHandler({
        ...props,
        key: generateKey(index, key),
      })
    )

  const append: ArrayInsertFn<T> = (...newValues) =>
    setValue(values.concat(newValues.length > 0 ? newValues : [undefined]))
  const removeAt: ArrayRemoveAtFn = (index: number) =>
    setValue(values.filter((_v, i) => i !== index))

  return {
    key,
    value,
    setValue,
    dirty,
    markDirty,
    resetDirty,
    touched,
    markTouched,
    resetTouched,
    error,
    setError,
    clearError,
    reset,
    pass,
    passComponent,
    getField,
    setField,
    register,
    registerComponent,
    handlers,
    append,
    removeAt,
  }
}
