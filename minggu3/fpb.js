//cari faktor persekutuan terbesar
function fpb(a, b) {
  for(let i = a + b; i > 0 ; i--) {
    if(a % i == 0 && b % i == 0) {
      return i;
    }
  }
}
// TEST CASES
console.log(fpb(12, 16)); // 4
console.log(fpb(50, 40)); // 10
console.log(fpb(22, 99)); // 11
console.log(fpb(24, 36)); // 12
console.log(fpb(17, 23)); // 1
