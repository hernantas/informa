import { Key } from 'react'
import { FormHandler } from '../base/FormHandler'
import { FormFieldController } from '../field/FormFieldController'

/**
 * Extended version of {@link FormFieldController} that have index and key to be
 * used as member of parent {@link FormHandler}
 */
export interface FormIndexedFieldController<T> extends FormFieldController<T> {
  index: number
  key: Key | null | undefined
}
