import { useFormArrayControl } from 'informa'
import { TestContainer } from '../components/TestContainer'

export function ArrayControl() {
  const { value, controllers, append, prepend, removeAt } = useFormArrayControl(
    {
      value: [undefined],
    }
  )

  const children = controllers.map((handler, index) => (
    <div key={handler.key}>
      <span>[{handler.key}]</span>
      <input type="text" {...handler.pass((event) => event.target.value)} />
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
