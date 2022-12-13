import { FormProps, useForm } from 'informa'
import { mergeClass } from '../util/mergeClass'

export function StringField(props: FormProps<string>) {
  const { dirty, pass } = useForm(props)
  return (
    <input
      {...pass((e) => e.target.value)}
      type="text"
      className={mergeClass('border py-2 px-3', dirty && 'border-slate-900')}
    />
  )
}

export function BooleanField(props: FormProps<boolean>) {
  const { pass } = useForm(props)

  return (
    <input
      {...pass((e) => e.target.checked)}
      checked={props.value ?? false}
      type="checkbox"
      className="border py-2 px-3"
    />
  )
}
