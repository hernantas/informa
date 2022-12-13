import { FormProps, useForm } from 'informa'

export function StringField(props: FormProps<string>) {
  const { pass } = useForm(props)
  return (
    <input
      {...pass((e) => e.target.value)}
      type="text"
      className="border py-2 px-3"
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
