import { Key } from 'react'
import { ValueState } from '../state/value/ValueState'
import { PassToComponent } from './PassToComponent'
import { PassToHtml } from './PassToHtml'

/** Object interface that can be used to handle form */
export interface FormHandler<T> extends ValueState<T> {
  pass: PassToHtml<T>
  passComponent: PassToComponent<T>
  key?: Key | undefined
}
