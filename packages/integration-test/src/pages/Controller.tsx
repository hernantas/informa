import { useFormControl } from 'informa'
import { TestContainer } from '../components/TestContainer'

export function Controller() {
  const { value, pass } = useFormControl({
    value: '',
  })

  return (
    <TestContainer title="Controller" result={value}>
      <input type="text" {...pass((event) => event.target.value)} />
    </TestContainer>
  )
}
