import { useForm } from 'informa'
import { TestContainer } from '../components/TestContainer'

export function Control() {
  const { value, pass } = useForm({
    value: '',
  })

  return (
    <TestContainer title="Control" result={value}>
      <input type="text" {...pass((event) => event.target.value)} />
    </TestContainer>
  )
}
