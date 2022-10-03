import { useFormController } from 'informa'
import { useEffect } from 'react'
import { TestContainer } from '../components/TestContainer'

export function Controller() {
  const { value, setValue, pass, isLocked, createSubmit } = useFormController({
    value: '',
  })

  const onSubmit = createSubmit(
    () =>
      new Promise((resolve) => {
        console.log('Started', value)
        setTimeout(() => {
          console.log('Finished', value)
          resolve()
        }, 1000)
      })
  )

  useEffect(() => setValue('Some value'), [])

  return (
    <TestContainer title="Controller" result={value}>
      <input type="text" {...pass((event) => event.target.value)} />
      {!isLocked() ? (
        <button onClick={onSubmit}>Submit</button>
      ) : (
        <span>Loading</span>
      )}
    </TestContainer>
  )
}
