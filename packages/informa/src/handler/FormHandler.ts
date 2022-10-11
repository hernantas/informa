import { Key } from 'react'
import { ChangeFn } from '../props/ChangeFn'
import { DeepPartial } from '../type/DeepPartial'
import { PassToComponent } from './PassToComponent'
import { PassToHtml } from './PassToHtml'

/** Object interface that can be used to handle form */
export interface FormHandler<T> {
  value?: DeepPartial<T> | undefined
  setValue: ChangeFn<T>
  pass: PassToHtml<T>
  passComponent: PassToComponent<T>
  key?: Key | undefined
}
