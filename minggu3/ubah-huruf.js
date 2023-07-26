//sistem ubah hurufnya misal huruf a diubah menjadi b, c menjadi d, b menjadi c, z menjadi a
//intinya ubah huruf menjadi huruf setelahnya
function ubahHuruf(kata) {
  // you can only write your code here!
  const kumpulanHuruf = [];
  for (let i = 65; i <= 90; i++) {
    kumpulanHuruf.push(String.fromCharCode(i).toLowerCase());
  }
  let result = "";
  for (let i = 0; i < kata.length; i++) {
    for (let j = 0; j < kumpulanHuruf.length; j++) {
      if (kata[i] == kumpulanHuruf[j]) {
        if (kata[i] == "z") {
          result += "a";
        } else {
          result += kumpulanHuruf[j + 1];
        }
      }
    }
  }
  return result;
}

// TEST CASES
console.log(ubahHuruf("wow")); // xpx
console.log(ubahHuruf("developer")); // efwfmpqfs
console.log(ubahHuruf("javascript")); // kbwbtdsjqu
console.log(ubahHuruf("keren")); // lfsfo
console.log(ubahHuruf("semangat")); // tfnbohbu
console.log(ubahHuruf("zebra")); // tfnbohbu
