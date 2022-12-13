import { useFormGroup } from 'informa'
import { TestContainer } from '../components/TestContainer'

interface User {
  name: string
  active: boolean
}

export function Form() {
  const { value, register, isProcessing, createAction } = useFormGroup<User>()

  const result = `{${Object.entries(value ?? {})
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ')}}`

  const onSubmit = createAction(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(result)
        resolve()
      }, 1000)
    })
  })

  return (
    <TestContainer title="Form" result={result}>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>
              <input
                type="text"
                placeholder="Name"
                {...register('name', (e) => e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Active</td>
            <td>:</td>
            <td>
              <input
                type="checkbox"
                {...register('active', (e) => e.target.checked)}
              />
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td colSpan={3}>
              {!isProcessing() ? (
                <button onClick={onSubmit}>Submit</button>
              ) : (
                'Processing'
              )}
            </td>
          </tr>
        </tfoot>
      </table>
    </TestContainer>
  )
}
