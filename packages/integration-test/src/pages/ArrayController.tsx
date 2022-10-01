import { getFormFieldArrayHandler, useFormProps } from 'informa'
import { TestContainer } from '../components/TestContainer'

export function ArrayController() {
  const props = useFormProps<string[]>({
    value: [undefined],
  })
  const controller = getFormFieldArrayHandler(props)

  const children = controller.controllers.map((handler, index) => (
    <div key={handler.key}>
      <span>[{handler.key}]</span>
      <input type="text" {...handler.pass((event) => event.target.value)} />
      <button onClick={() => controller.removeAt(index)}>Remove</button>
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
