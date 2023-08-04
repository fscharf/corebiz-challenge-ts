export const formatCurrency = (value: number): string => {
  const amount = value.toString()
  const parsedAmount =
    amount.length < 2 ? amount : amount.slice(0, -2) + '.' + amount.slice(-2)

  return Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    style: 'currency'
  }).format(Number(parsedAmount))
}
