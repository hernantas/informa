import { useFormArray } from 'informa'
import { TestContainer } from '../components/TestContainer'

export function ArrayControl() {
  const { value, handlers, append, prepend, removeAt } = useFormArray({
    value: [undefined],
  })

  const children = handlers.map(({ key, pass }, index) => (
    <div key={key}>
      <span>[{key}]</span>
      <input type="text" {...pass((event) => event.target.value)} />
      <button onClick={() => removeAt(index)}>Remove</button>
    </div>
  ))

  return (
    <TestContainer title="Array Control" result={value}>
      <div>
        <button onClick={() => prepend()}>Prepend</button>
        <button onClick={() => append()}>Append</button>
      </div>
      {children}
    </TestContainer>
  )
}
