import { FormProps, useForm } from 'informa'
import { mergeClass } from '../util/mergeClass'

export function StringField(props: FormProps<string>) {
  const { dirty, touched, resetTouched, error, setError, clearError, pass } =
    useForm(props)
  return (
    <>
      <input
        {...pass((e) => {
          const s = e.target.value

          if (s === undefined || s.trim().length < 1) {
            setError('Cannot be empty')
          } else {
            clearError()
          }

          return s
        })}
        type="text"
        className={mergeClass(
          'border py-2 px-3',
          error !== undefined && 'border-red-500'
        )}
        onFocus={() => resetTouched()}
      />
      <span className="text-sm text-slate-500">
        {dirty && 'D'}
        {touched && 'T'}
      </span>
      {touched && error !== undefined && (
        <span className="text-sm text-red-500">{String(error)}</span>
      )}
    </>
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
