/**
  Square Number
  Diberikan sebuah function squareNumber dimana menerima inputan berupa angka.
  Function ini akan mengembalikan array multidimensi angka x angka yang isi value
  dari array multidimensi tersebut menyerupai `board snakes and ladders`
  Contoh 1:
  input: 3
  output:
      [
        [7, 8, 9],
        [6, 5, 4],
        [1, 2, 3]
      ]
  Contoh 2:
  input: 4
  output:
      [
        [ 16, 15, 14, 13 ],
        [ 9, 10, 11, 12 ],
        [ 8, 7, 6, 5 ],
        [ 1, 2, 3, 4 ]
      ]
NOTE:
 - INPUT PARAMETER MINIMAL 3, JIKA KURANG DARI 3 MAKA RETURN 'Minimal input adalah 3'
 - NILAI FULL(100) AKAN DIBERIKAN JIKA BERHASIL MENYELESAIKAN KASUS DIATAS
 - NILAI 80 AKAN DIBERIKAN JIKA value angka di dalam array tersebut tidak persis
   menyerupai snakes and ladders TAPI angka 1 harus tetap berada di kolom paling bawah!
   CONTOH:
     [
       [ 13, 14, 15, 16 ],
       [ 9, 10, 11, 12 ],
       [ 5, 6, 7, 8 ],
       [ 1, 2, 3, 4 ]
     ]
**/

function squareNumber(num) {
  //code here
  if(num < 3) {
    return "Minimal input adalah 3";
  }

  const result = [];
  let item = [];
  //membuat array berdasarkan num
  for(let i = num * num; i > 0; i--) {
    item.push(i);
    if(item.length == num) {
      result.push(item);
      item = [];
    }
  }

  //membalik urutan angka
  for(let i = 0; i < result.length; i++) {
    let condition;
    if(result.length % 2 == 0) {
       condition = i % 2 !== 0;
    } else {
       condition = i % 2 == 0;
    }
    if(condition) {
      for(let j = 0; j < result[i].length; j++) {
        for(let k = 0; k < result[i].length; k++) {
          if(result[i][k] > result[i][k + 1]) {
            let temp = result[i][k];
            result[i][k] = result[i][k + 1];
            result[i][k + 1] = temp;
          }
        }
      }
    }
  }
  return result;
}

console.log(squareNumber(3));
// [ [ 7, 8, 9 ], [ 6, 5, 4 ], [ 1, 2, 3 ] ]

console.log(squareNumber(4));
// [ [ 16, 15, 14, 13 ],
//   [ 9, 10, 11, 12 ],
//   [ 8, 7, 6, 5 ],
//   [ 1, 2, 3, 4 ] ]

console.log(squareNumber(5));
// [ [ 21, 22, 23, 24, 25 ],
//   [ 20, 19, 18, 17, 16 ],
//   [ 11, 12, 13, 14, 15 ],
//   [ 10, 9, 8, 7, 6 ],
//   [ 1, 2, 3, 4, 5 ] ]
console.log(squareNumber(6));

console.log(squareNumber(2)); // Minimal input adalah 3
