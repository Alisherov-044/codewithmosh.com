export function getAbsolutePrice(price: number, discount: number | undefined) {
  if (!discount) {
    return price;
  }

  if (discount < 1 || discount > 100) {
    throw Error("discount incorrect!!");
  }

  const result = price - (price / 100) * discount;

  return result;
}
