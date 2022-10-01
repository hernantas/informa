import { Key } from 'react'

/**
 * Generate key from array index and id (optional)
 *
 * @internal
 */
export function generateKey(index: number, key?: Key): string {
  return key !== undefined
    ? `form-field-${key}-${index}`
    : `form-field-${index}`
}
