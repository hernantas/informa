import { Key } from 'react'
import { FormState } from '../state/FormState'
import { Action } from '../type/Action'
import { PassToComponent } from './PassToComponent'
import { PassToHtml } from './PassToHtml'

/** Object interface that can be used to handle form */
export interface FormHandler<T> extends FormState<T> {
  reset: Action
  passHtml: PassToHtml<T>
  pass: PassToComponent<T>
  key?: Key | undefined
}
