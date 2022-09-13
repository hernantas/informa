import { getController, useFormProps } from 'informa'
import { useEffect } from 'react'
import { TestContainer } from '../components/TestContainer'

export function Controller() {
  const props = useFormProps<string>()
  const controller = getController(props)

  useEffect(() => controller.setValue('SetValue'), [])

  return (
    <TestContainer title="Controller" result={props.value}>
      <input type="text" {...controller.pass((event) => event.target.value)} />
    </TestContainer>
  )
}
