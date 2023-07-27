//DILARANG MENGGUNAKAN METHOD SORT, PELAJARI ALGORITMA SORTING YANG ADA DI GOOGLE
//saran sih pake bubblesort walau tidak efisien tapi bagus buat belajar sorting
function urutkanAbjad(str) {
  // you can only write your code here!
  let kumpulanHuruf = [];
  for(let i = 65; i <= 90; i++) {
    kumpulanHuruf.push(String.fromCharCode(i).toLowerCase());
  }

  let result = '';
  let index = [];
  // cari index kata di kumpulan huruf
  for(let i = 0; i < str.length; i++) {
    for(let j = 0; j < kumpulanHuruf.length; j++) {
      if(str[i] == kumpulanHuruf[j]) {
        index.push(j);
      }
    }
  }

  // urutkan indexnya
  for(let i = 0; i < index.length; i++) {
    for(let j = 0; j < index.length; j++) {
      if(index[j] > index[j + 1]) {
        let temp = index[j];
        index[j] = index[j+1];
        index[j+1] = temp;
      }
    }
  }

  //cari huruf sesuai indexnya
  for(let i = 0; i < index.length; i++) {
    result += kumpulanHuruf[index[i]]
  }
  
  return result;
}


// TEST CASES
console.log(urutkanAbjad("hello")); // 'ehllo'
console.log(urutkanAbjad("truncate")); // 'acenrttu'
console.log(urutkanAbjad("developer")); // 'deeeloprv'
console.log(urutkanAbjad("software")); // 'aeforstw'
console.log(urutkanAbjad("aegis")); // 'aegis'
