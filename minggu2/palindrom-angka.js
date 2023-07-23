/*
Diberikan sebuah function angkaPalindrome(angka) yang menerima satu parameter angka. Function akan me-return angka selanjutnya yang mengandung nilai angka palindrome. Contoh, jika angka adalah 27, maka function akan me-return nilai 33 karena angka 33 adalah angka palindrom. Jika angka dari awal sudah merupakan palindrome, maka function harus mencari angka selanjutnya yang palindrome. Contoh, jika angka adalah 8, walaupun dia sudah palindrome, harus mencari angka selanjutnya yang palindrome, yaitu 9.

note kenapa angka 8 adalah palindrome? karena angka 8 dibalik tetep 8 wkwkw
note kenapa angka 343 adalah palindrome? karena angka 343 dibalik tetep 343 eaaaa
*/

function angkaPalindrome(num) {
  let i = num + 1;
  while (true) {
    //ini biar infinite loop
    //disini proses pengecekan apakah angka itu palindrom atau bukan
    let angkaKebalik = "";
    let numStr = i.toString();
    for (let i = numStr.length - 1; i >= 0; i--) {
      //masukan ke angkaKebalik , sisanya harusnya kamu tau
      angkaKebalik += numStr[i];
    }
    //kalau angka itu palindrom, return i
    if(angkaKebalik == numStr) {
      return i;
    } else {
      i++;
    }
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
