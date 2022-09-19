import { getFieldArrayController, useFormProps } from 'informa'
import { TestContainer } from '../components/TestContainer'

export function ArrayController() {
  const props = useFormProps<string[]>({
    value: [undefined],
  })
  const controller = getFieldArrayController(props)

  const children = controller.controllers.map((c) => (
    <div key={c.key}>
      <span>[{c.index}]</span>
      <input type="text" {...c.pass((event) => event.target.value)} />
      <button onClick={() => controller.removeAt(c.index)}>Remove</button>
    </div>
  ))

  return (
    <TestContainer title="Array Controller" result={props.value}>
      <div>
        <button onClick={() => controller.prepend()}>Prepend</button>
        <button onClick={() => controller.append()}>Append</button>
      </div>
      {children}
    </TestContainer>
  )
}
