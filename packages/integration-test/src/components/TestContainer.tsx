import { ReactNode } from 'react'

export interface TestContainerProps {
  title: string
  result?: any
  children?: ReactNode
}

export function TestContainer(props: TestContainerProps) {
  return (
    <div style={{ border: '1px solid #eee', padding: '1rem' }}>
      <h1 style={{ margin: 0 }}>{props.title}</h1>
      <div>{props.children}</div>
      <div style={{ fontSize: '0.8rem', color: '#3f3f3f' }}>{props.result}</div>
    </div>
  )
}
