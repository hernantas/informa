import { useFormGroup } from 'informa'
import { BooleanField, StringField } from '../components/Field'
import { TestContainer } from '../components/TestContainer'
import { printObject } from '../util/printObject'

interface User {
  id: number
  username: string
  password: string
  active: boolean
}

export function GroupControl() {
  const { value, dirty, registerComponent } = useFormGroup<User>()

  const result = printObject(value)

  return (
    <TestContainer title="Field Control" dirty={dirty} result={result}>
      <table>
        <tbody>
          <tr>
            <td>ID</td>
            <td>:</td>
            <td>
              <StringField {...registerComponent('id')} />
            </td>
          </tr>
          <tr>
            <td>Username</td>
            <td>:</td>
            <td>
              <StringField {...registerComponent('username')} />
            </td>
          </tr>
          <tr>
            <td>Password</td>
            <td>:</td>
            <td>
              <StringField {...registerComponent('password')} />
            </td>
          </tr>
          <tr>
            <td>Active</td>
            <td>:</td>
            <td>
              <BooleanField {...registerComponent('active')} />
            </td>
          </tr>
        </tbody>
      </table>
    </TestContainer>
  )
}
