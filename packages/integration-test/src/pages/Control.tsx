import { useForm } from 'informa'
import { StringField } from '../components/Field'
import { TestContainer } from '../components/TestContainer'

export function Control() {
  const { value, dirty, passComponent } = useForm<string>()

  return (
    <TestContainer title="Control" dirty={dirty} result={value}>
      <StringField {...passComponent()} />
    </TestContainer>
  )
}
