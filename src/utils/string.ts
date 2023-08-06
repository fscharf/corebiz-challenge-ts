export const removeSymbols = (input: string): string => {
  const normalizedString = input.normalize('NFD')
  const symbolAndAccentRegex = /[\p{M}\p{P}\p{S}\p{C}]/gu
  const result = normalizedString.replace(symbolAndAccentRegex, '')
  return result
}
