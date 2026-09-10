export function calculateCustomerScore(
  age: number,
  purchases: number,
  complaints: number,
  active: boolean,
): number {
  let score = 0

  if (age >= 18) {
    score += 10
  }

  if (age >= 25) {
    score += 5
  }

  if (age >= 40) {
    score += 5
  }

  if (purchases > 5) {
    score += 10
  }

  if (purchases > 10) {
    score += 10
  }

  if (purchases > 20) {
    score += 10
  }

  if (complaints === 0) {
    score += 20
  }

  if (complaints > 2) {
    score -= 10
  }

  if (complaints > 5) {
    score -= 20
  }

  if (active) {
    score += 10
  }

  if (score < 0) {
    score = 0
  }

  if (score > 100) {
    score = 100
  }

  return score
}
