// Implement integer exponentiation. That is, implement the pow(x, y) function, where x and y are integers and returns x^y.

// Do this faster than the naive method of repeated multiplication.

// For example, pow(2, 10) should return 1024.

const multiply = (a: number, b: number) => {
  let res = 0
  for (b; b > 0; b--) {
    res += a
  }
  return res
}

const pow = (coef: number, exp: number) => {
  // This works but some languages don't support this operator
  let res = coef
  while (exp > 1) {
    res = multiply(res, coef)
    exp--
  }
  return res

}

const res = pow(2, 10)
console.log(res)

