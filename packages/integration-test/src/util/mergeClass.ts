export function mergeClass(...classList: unknown[]): string {
  return classList
    .map((c) => {
      if (c === undefined || c === null || c === false) {
        return ''
      }
      return String(c)
    })
    .filter((c) => c !== '')
    .flatMap((c) => c.split(' '))
    .reduce<string[]>((rows, value) => {
      // remove duplicate
      if (rows.find((row) => row === value) !== undefined) {
        return rows
      }
      return rows.concat(value)
    }, [])
    .join(' ')
}
