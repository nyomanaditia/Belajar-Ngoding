/*

Diberikan sebuah function palindromeRecursive(sentenc) yang menerima satu parameter.
Function tersebut akan mengembalikan nilai true jika kata merupakan palindrome, dan false jika bukan.
Kata palindrome adalah sebuah kata yang jika dibalik, tetap sama.
Contoh, 'katak' dibalik tetaplah 'katak'.

RULES
=====
- Wajib menggunakan metode rekursif
- Dilarang menambahkan parameter baru
- Dilarang membuat variable di luar function palindromeRecursive
- Dilarang mengubah tipe data parameter

*/

function palindromeRecursive(sentence) {
  //code here - saran bikin fungsi rekursif didalam sini
  // return sentence.slice(-1)
  function palindrome(sentence) {
    if(sentence.length == 0) {
      return '';
    }
    let result = '';
    result = sentence[0] + result

    return result = palindrome(sentence.slice(1)) + result;
  }
  
  if (sentence == palindrome(sentence)) {
    return true;
  } else {
    return false;
  }
  // lalu bandingkan dengan sentence
}

// TEST CASES
console.log(palindromeRecursive("katak")); // true
console.log(palindromeRecursive("blanket")); // false
console.log(palindromeRecursive("civic")); // true
console.log(palindromeRecursive("kasur rusak")); // true
console.log(palindromeRecursive("mister")); // false
