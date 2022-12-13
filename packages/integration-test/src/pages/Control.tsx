import { useForm } from 'informa'
import { StringField } from '../components/Field'
import { TestContainer } from '../components/TestContainer'

export function Control() {
  const { value, dirty, touched, passComponent } = useForm<string>()

  return (
    <TestContainer
      title="Control"
      dirty={dirty}
      touched={touched}
      result={value}
    >
      <StringField {...passComponent()} />
    </TestContainer>
  )
}
