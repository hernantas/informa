import { ChangeEventHandler } from 'react'

/** Interface for value that can be compatible with {@link HTMLElement} */
export interface FormElementAttributes<T> {
  value?: string | ReadonlyArray<string> | number | undefined
  onChange?: ChangeEventHandler<T> | undefined
}

// declare const props: FormElementAttributes<any>
// declare function passInput(props: InputHTMLAttributes<HTMLInputElement>): void
// declare function passLabel(props: LabelHTMLAttributes<HTMLLabelElement>): void
// declare function passSelect(props: SelectHTMLAttributes<HTMLSelectElement>): void
// declare function passTextarea(
//   props: TextareaHTMLAttributes<HTMLTextAreaElement>
// ): void
// declare function passButton(props: ButtonHTMLAttributes<HTMLButtonElement>): void
// declare function passFieldset(
//   props: FieldsetHTMLAttributes<HTMLFieldSetElement>
// ): void
// declare function passData(props: DataHTMLAttributes<HTMLDataElement>): void
// declare function passDOM(props: DOMAttributes<HTMLInputElement>): void
