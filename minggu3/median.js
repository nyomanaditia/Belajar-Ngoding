function cariMedian(arr) {
  // you can only write your code here!
  let terurut = arr.sort((a, b) => {
    return a - b;
  });

  if (terurut.length % 2 !== 0) {
    return arr[Math.floor(terurut.length / 2)];
  } else {
    return (arr[terurut.length / 2] + arr[terurut.length / 2 - 1]) / 2;
  }
}

// TEST CASES
console.log(cariMedian([1, 2, 3, 4, 5])); // 3
console.log(cariMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(cariMedian([3, 4, 7, 6, 10])); // 6
console.log(cariMedian([1, 3, 3])); // 3
console.log(cariMedian([7, 7, 8, 8])); // 7.5
