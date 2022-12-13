import { useForm } from 'informa'
import { StringField } from '../components/Field'
import { TestContainer } from '../components/TestContainer'

export function Control() {
  const { value, passComponent } = useForm<string>()

  return (
    <TestContainer title="Control" result={value}>
      <StringField {...passComponent()} />
    </TestContainer>
  )
}
