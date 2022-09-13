import { useCallback, useState } from 'react'
import { ChangeFn } from './props/ChangeFn'
import { FormProps } from './props/FormProps'
import { DeepPartial } from './type/DeepPartial'

/**
 * Similar to {@link useState} which manage its own state (has a stateful value
 * and a function to update it) but using {@link FormProps} format
 *
 * @param props Optional form properties that will be used as basis
 * @returns
 */
export function useFormProps<T>(props?: FormProps<T>): FormProps<T> {
  const [value, setValue] = useState<DeepPartial<T> | undefined>(props?.value)

  const onChange = useCallback<ChangeFn<T>>(
    (newValue) => {
      setValue(newValue)
      if (props?.onChange !== undefined) {
        props.onChange(newValue)
      }
    },
    [props?.onChange]
  )

  return {
    value,
    onChange,
  }
}
