import { Action } from 'informa'
import { ReactNode } from 'react'

interface ButtonProps {
  onClick?: Action
  children?: ReactNode
}

export function Button(props: ButtonProps) {
  return (
    <button
      className="border bg-slate-100 py-2 px-3"
      onClick={() => props.onClick?.call(undefined)}
    >
      {props.children}
    </button>
  )
}
