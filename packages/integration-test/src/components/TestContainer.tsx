import { ReactNode } from 'react'

export interface TestContainerProps {
  title: string
  result?: any
  dirty?: boolean
  touched?: boolean
  children?: ReactNode
}

export function TestContainer(props: TestContainerProps) {
  return (
    <div className="border p-4 m-4">
      <h1 className="text-3xl">{props.title}</h1>
      <div className="mt-4">{props.children}</div>
      <div className="mt-4 pt-2 border-t text-sm text-slate-500">
        <p>Dirty: {props.dirty ? 'true' : 'false'}</p>
        <p>Touched: {props.touched ? 'true' : 'false'}</p>
        <p>Result: {String(props.result)}</p>
      </div>
    </div>
  )
}
