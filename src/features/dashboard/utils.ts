export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-NG", {
    style: "currency",
    currency: "NGN",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount)
}

export function formatNumber(amount: number): string {
  if (amount >= 1000000) return (amount / 1000000).toFixed(1) + "m"
  if (amount >= 1000) return (amount / 1000).toFixed(1) + "k"
  return amount.toString()
}
