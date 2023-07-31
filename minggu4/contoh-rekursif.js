function power(base, exponent) {
  if (exponent == 0) return 1;
  else return base * power(base, exponent - 1);
}
console.log(power(3, 3)); // 3 ** 3 = 27

/*
    exponent 3
    3 * undefined
    exponent 2
    3 * 3 * undefined
    exponent 1
    3 * 3 * 3 * undefined
    exponent 0
    3 * 3 * 3 * 1
  */
