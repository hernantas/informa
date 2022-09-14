/**
 * Generate key from array index and id (optional)
 *
 * @internal
 */
export function generateKey(index: number, id?: string): string {
  return id !== undefined ? `form-field-${id}-${index}` : `form-field-${index}`
}
