//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here

// ---------------------------------------
console.log(word + " " + second + " " + third + " " + fourth + " " + fifth + " " + sixth + " " + seventh);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word2 = "wow JavaScript is so cool";

let exampleFirstWord = word2[0] + word2[1] + word2[2];
console.log("First Word: " + exampleFirstWord);

let secondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
console.log("Second Word: " + secondWord);

let thirdWord = word2[15] + word2[16];
console.log("Third Word: " + thirdWord)
// ---------------------------------------
let fourthWord = word2[18] + word2[19];
console.log("Fourth Word: " + fourthWord);

let fifthWord = word2[21] + word2[22] + word2[23] + word2[24];
console.log("Fifth Word: " + fifthWord);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);

console.log("First Word: " + exampleFirstWord3);

let secondWord3 = word3.substring(4, 14);
console.log("Second Word: " + secondWord3);

// ---------------------------------------
let thirdWord3 = word3.substring(15, 17);
console.log("Third Word: " + thirdWord3);

let fourthWord3 = word3.substring(18, 20);
console.log("Fourth Word: " + fourthWord3);

let fifthWord3 = word3.substring(21, 25);
console.log("Fifth Word: " + fifthWord3);
// ---------------------------------------


// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!


let word4 = 'wow JavaScript is so cool';
let exampleFirstWord4 = word4.substring(0, 3);

let firstWordLength = exampleFirstWord4.length;

console.log('First Word: ' + exampleFirstWord + ', with length: ' + firstWordLength);

let secondWord4 = word4.substring(4, 14);
let secondWord4Length = secondWord4.length;
console.log(
  "Second Word: " + secondWord4 + ", with length: " + secondWord4Length
);
let thirdWord4 = word4.substring(15, 17);
let thirdWord4Length = thirdWord4.length;
console.log(
  "Third Word: " + thirdWord4 + ", with length: " + thirdWord4Length
);
let fourthWord4 = word4.substring(18, 20);
let fourthWord4Length = fourthWord4.length;
console.log(
  "Fourth Word: " + fourthWord4 + ", with length: " + fourthWord4Length
);
let fifthWord4 = word4.substring(21, 25);
let fifthWord4Length = fifthWord4.length;
console.log(
  "Fifth Word: " + fifthWord4 + ", with length: " + fifthWord4Length
);
