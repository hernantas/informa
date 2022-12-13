import { useFormGroup } from 'informa'
import { Button } from '../components/Button'
import { BooleanField, StringField } from '../components/Field'
import { TestContainer } from '../components/TestContainer'
import { printObject } from '../util/printObject'

interface User {
  name: string
  active: boolean
}

export function Form() {
  const {
    value,
    dirty,
    touched,
    registerComponent,
    isProcessing,
    createAction,
  } = useFormGroup<User>()

  const result = printObject(value)

  const onSubmit = createAction(async () => {
    return new Promise((resolve) => {
      setTimeout(() => {
        alert(result)
        resolve()
      }, 1000)
    })
  })

  return (
    <TestContainer title="Form" dirty={dirty} touched={touched} result={result}>
      <table>
        <tbody>
          <tr>
            <td>Name</td>
            <td>:</td>
            <td>
              <StringField {...registerComponent('name')} />
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
        <tfoot>
          <tr>
            <td colSpan={3}>
              {!isProcessing() ? (
                <Button onClick={onSubmit}>Submit</Button>
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
