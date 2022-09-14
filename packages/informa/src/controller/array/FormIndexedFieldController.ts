import { Key } from 'react'
import { FormController } from '../base/FormController'
import { FormFieldController } from '../field/FormFieldController'

/**
 * Extended version of {@link FormFieldController} that have index and key to be
 * used as member of parent {@link FormController}
 */
export interface FormIndexedFieldController<T> extends FormFieldController<T> {
  index: number
  key: Key | null | undefined
}
