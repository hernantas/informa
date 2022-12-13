import { useFormArray } from 'informa'
import { Button } from '../components/Button'
import { StringField } from '../components/Field'
import { TestContainer } from '../components/TestContainer'

export function ArrayControl() {
  const { value, handlers, dirty, touched, append, removeAt } =
    useFormArray<string>({
      value: [undefined],
    })

  const children = handlers.map(({ key, passComponent }, index) => (
    <div key={key}>
      <span>[{key}]</span>
      <StringField {...passComponent()} />
      <Button onClick={() => removeAt(index)}>Remove</Button>
    </div>
  ))

  return (
    <TestContainer
      title="Array Control"
      dirty={dirty}
      touched={touched}
      result={value}
    >
      <Button onClick={() => append()}>Append</Button>
      {children}
    </TestContainer>
  )
}
