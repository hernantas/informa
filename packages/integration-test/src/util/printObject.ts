export function printObject(obj?: Record<keyof any, unknown>) {
  return `{${Object.entries(obj ?? {})
    .map(([key, value]) => `${key}: ${value}`)
    .join(', ')}}`
}
