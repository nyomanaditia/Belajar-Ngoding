function pasanganTerbesar(num) {
  let numStr = num.toString();
  let max = 0;

  for(let i = 0; i < numStr.length; i++) {
    if(numStr[i] + numStr[i+1] > max) {
      max = numStr[i] + numStr[i + 1];
    }
  }

  return max;
}

// TEST CASES
console.log(pasanganTerbesar(641573)); // Output: 73
console.log(pasanganTerbesar(12783456)); // Output: 83
console.log(pasanganTerbesar(910233)); // Output: 91
console.log(pasanganTerbesar(71856421)); // Output: 85
console.log(pasanganTerbesar(79918293)); // Output: 99
