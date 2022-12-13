import { useFormGroup } from 'informa'
import { TestContainer } from '../components/TestContainer'

interface User {
  id: number
  username: string
  password: string
  active: boolean
}

export function GroupControl() {
  const { value, register } = useFormGroup<User>()

  const result = `${value?.id}\n${value?.username}\n${value?.password}\n${
    value?.active ? 'true' : 'false'
  }`
  return (
    <TestContainer title="Field Control" result={result}>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>:</td>
            <td>
              <input
                type="text"
                {...register('id', (e) => e.target.value as unknown as number)}
              />
            </td>
          </tr>
          <tr>
            <td>Username</td>
            <td>:</td>
            <td>
              <input
                type="text"
                {...register('username', (e) => e.target.value)}
              />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>:</td>
            <td>
              <input
                type="text"
                {...register('password', (e) => e.target.value)}
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
      </table>
    </TestContainer>
  )
}
