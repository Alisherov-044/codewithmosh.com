let DOLLAR = Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
});

export function formatCurrency(number: number): string {
  return DOLLAR.format(number);
}
