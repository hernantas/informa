import { getFormFieldHandler, useFormProps } from 'informa'
import { TestContainer } from '../components/TestContainer'

interface User {
  id: number
  username: string
  password: string
  active: boolean
}

export function FieldController() {
  const props = useFormProps<User>({ value: {} })
  const controller = getFormFieldHandler(props)

  const result = `${props.value?.id}\n${props.value?.username}\n${
    props.value?.password
  }\n${props.value?.active ? 'true' : 'false'}`
  return (
    <TestContainer title="Field Controller" result={result}>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>:</td>
            <td>
              <input
                type="text"
                {...controller.register(
                  'id',
                  (e) => e.target.value as unknown as number
                )}
              />
            </td>
          </tr>
          <tr>
            <td>Username</td>
            <td>:</td>
            <td>
              <input
                type="text"
                {...controller.register('username', (e) => e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>:</td>
            <td>
              <input
                type="text"
                {...controller.register('password', (e) => e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Active</td>
            <td>:</td>
            <td>
              <input
                type="checkbox"
                {...controller.register('active', (e) => e.target.checked)}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </TestContainer>
  )
}
