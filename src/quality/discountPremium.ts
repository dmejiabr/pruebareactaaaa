export function calculatePremiumDiscount(
  customerType: string,
  amount: number,
  yearsAsCustomer: number,
  hasPromotion: boolean,
): number {
  let discount = 0

  if (customerType === 'gold') {
    discount = 10
  } else if (customerType === 'silver') {
    discount = 5
  } else if (customerType === 'bronze') {
    discount = 2
  } else {
    discount = 0
  }

  if (amount > 1000) {
    discount += 5
  }

  if (amount > 2000) {
    discount += 3
  }

  if (amount > 5000) {
    discount += 2
  }

  if (yearsAsCustomer > 1) {
    discount += 1
  }

  if (yearsAsCustomer > 3) {
    discount += 2
  }

  if (yearsAsCustomer > 5) {
    discount += 3
  }

  if (hasPromotion) {
    discount += 5
  }

  if (discount > 30) {
    discount = 30
  }

  return discount
}
