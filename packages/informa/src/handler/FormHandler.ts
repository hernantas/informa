import { Key } from 'react'
import { FormState } from '../state/FormState'
import { PassToComponent } from './PassToComponent'
import { PassToHtml } from './PassToHtml'

/** Object interface that can be used to handle form */
export interface FormHandler<T> extends FormState<T> {
  pass: PassToHtml<T>
  passComponent: PassToComponent<T>
  key?: Key | undefined
}
