import { Key } from 'react'
import { FormHandler } from '../base/FormHandler'
import { FormFieldHandler } from '../field/FormFieldHandler'

/**
 * Extended version of {@link FormFieldHandler} that have index and key to be
 * used as member of parent {@link FormHandler}
 */
export interface FormIndexedFieldController<T> extends FormFieldHandler<T> {
  index: number
  key: Key | null | undefined
}
