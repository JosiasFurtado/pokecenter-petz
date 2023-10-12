export function formatNumber(value: number, removeZeros = true): string {
  return new Intl.NumberFormat('pt-BR', {
    currency: 'BRL',
    maximumFractionDigits: 2,
    minimumFractionDigits: removeZeros ? 0 : 2,
    style: 'decimal',
  }).format(value)
}

export function formatMoney(value: number, includePrefix = true) {
  const formattedValue = formatNumber(value, false)
  return includePrefix ? `R$ ${formattedValue}` : formattedValue
}
