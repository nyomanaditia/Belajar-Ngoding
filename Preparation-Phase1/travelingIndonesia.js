/*
Function travelingIndonesia akan mengembalikan nilai sebuah string suatu perjalanan seseorang
di kota-kota besar yang ada di Indonesia.

Secara berturut-turut rute akan berlangsung ;
Yogyakarta > Semarang > Surabaya > Denpasar

Rute tersebut berlaku arah sebaliknya.
Traveller dapat menggunakan transportasi yang disediakan oleh
Pemerintah yaitu berupa :

- Pesawat, biayanya 275000
- Kereta, biayanya 250000
- Bis, biayanya 225000

Biaya tersebut berlaku untuk jarak 1 kota saja.

Dikarenakan traveller berkeliling Indonesia bertepatan dengan digalakkannya visit Indonesia
Maka traveller akan mendapatkan diskon menggunakan metode pembayaran tertentu;

- OVO > akan mendapatkan diskon 15% setiap kota
- Dana > akan mendapatkan diskon 10% setiap kota
- Gopay > akan mendapatkan diskon 5% setiap kota
- Cash > normal;

Function tersebut akan mengembalikan siapa yang mengeluarkan biaya paling besar (sudah termasuk diskon);

Note:
1. Hanya boleh menggunakan built in function .push();
*/

function travelingIndonesia(arr, emoney) {
  //code here
  const result = [];
  const arrTotalCost = [];
  for (let i = 0; i < arr.length; i++) {
    let name = "",
      departureCity = "",
      destinationCity = "",
      transport = "",
      totalCost = 0;

    //mencari nama
    for (let j = 0; j < arr[i].length; j++) {
      name += arr[i][j];
      if (arr[i][j + 1] == "-") {
        break;
      }
    }
    //mencari asal
    for (let j = name.length + 1; j < arr[i].length; j++) {
      departureCity += arr[i][j];
      if (arr[i][j + 1] == "-") {
        break;
      }
    }
    //mencari tujuan
    for (let j = name.length + departureCity.length + 2; j < arr[i].length; j++) {
      destinationCity += arr[i][j];
      if (arr[i][j + 1] == "-") {
        break;
      }
    }
    //mencari kendaraan
    for (let j = name.length + departureCity.length + destinationCity.length + 3; j < arr[i].length; j++) {
      transport += arr[i][j];
    }

    //Mencari jarak
    const arrTujuan = ["Yogyakarta", "Semarang", "Surabaya", "Denpasar"];
    let indexAsal = 0;
    let indexTujuan = 0;
    for (let i = 1; i <= arrTujuan.length; i++) {
      if (departureCity == arrTujuan[i]) {
        indexAsal = i;
      }
      if (destinationCity == arrTujuan[i]) {
        indexTujuan = i;
      }
    }
    const jarak = Math.abs(indexTujuan - indexAsal);

    //menghitung total biaya
    if (transport == "Pesawat") {
      totalCost = 275000 * jarak;
    } else if (transport == "Kereta") {
      totalCost = 250000 * jarak;
    } else {
      totalCost = 225000 * jarak;
    }

    //menghitung diskon
    if (emoney == "OVO") {
      totalCost = totalCost - totalCost * (15 / 100);
    } else if (emoney == "Dana") {
      totalCost = totalCost - totalCost * (10 / 100);
    } else if (emoney == "Gopay") {
      totalCost = totalCost - totalCost * (5 / 100);
    } else {
      totalCost = totalCost;
    }

    arrTotalCost.push(totalCost);

    //membuat object
    let obj = {
      name,
      departureCity,
      destinationCity,
      transport,
      totalCost,
    };

    result.push(obj);
  }

  //mengurutkan total biaya dari yang terbesar ke terkecil
  for (let i = 0; i < arrTotalCost.length; i++) {
    for (let j = 0; j < arrTotalCost.length; j++) {
      if (arrTotalCost[j] < arrTotalCost[j + 1]) {
        let temp = arrTotalCost[j];
        arrTotalCost[j] = arrTotalCost[j + 1];
        arrTotalCost[j + 1] = temp;
      }
    }
  }

  //hasil akhir yg sudah terurut
  const final = [];
  for (let i = 0; i < arrTotalCost.length; i++) {
    for (let j = 0; j < result.length; j++) {
      if (arrTotalCost[i] == result[j].totalCost) {
        final.push(result[j]);
      }
    }
  }
  
  return final;
}

console.log(
  travelingIndonesia(
    [
      "Danang-Yogyakarta-Semarang-Bis",
      "Alif-Denpasar-Surabaya-Kereta",
      "Bahari-Semarang-Denpasar-Pesawat",
    ],
    "OVO"
  )
);
/*
[ { name: 'Bahari',
    departureCity: 'Semarang',
    destinationCity: 'Denpasar',
    transport: 'Pesawat',
    totalCost: 467500 },
  { name: 'Alif',
    departureCity: 'Denpasar',
    destinationCity: 'Surabaya',
    transport: 'Kereta',
    totalCost: 212500 },
  { name: 'Danang',
    departureCity: 'Yogyakarta',
    destinationCity: 'Semarang',
    transport: 'Bis',
    totalCost: 191250 } ]
*/
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    [
      "Shafur-Surabaya-Yogyakarta-Kereta",
      "Taufik-Semarang-Surabaya-Pesawat",
      "Alex-Yogyakarta-Semarang-Kereta",
    ],
    "Dana"
  )
);
// /*
// [ { name: 'Shafur',
//     departureCity: 'Surabaya',
//     destinationCity: 'Yogyakarta',
//     transport: 'Kereta',
//     totalCost: 450000 },
//   { name: 'Taufik',
//     departureCity: 'Semarang',
//     destinationCity: 'Surabaya',
//     transport: 'Pesawat',
//     totalCost: 247500 },
//   { name: 'Alex',
//     departureCity: 'Yogyakarta',
//     destinationCity: 'Semarang',
//     transport: 'Kereta',
//     totalCost: 225000 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(
  travelingIndonesia(
    ["Andika-Denpasar-Surabaya-Bis", "Katy-Surabaya-Denpasar-Pesawat"],
    "Gopay"
  )
);
// /*
// [ { name: 'Katy',
//     departureCity: 'Surabaya',
//     destinationCity: 'Denpasar',
//     transport: 'Pesawat',
//     totalCost: 261250 },
//   { name: 'Andika',
//     departureCity: 'Denpasar',
//     destinationCity: 'Surabaya',
//     transport: 'Bis',
//     totalCost: 213750 } ]
// */
console.log(
  "=================================================================================================="
);
console.log(travelingIndonesia(["Putra-Denpasar-Yogyakarta-Pesawat"], "Cash"));
// /*
// [ { name: 'Putra',
//     departureCity: 'Denpasar',
//     destinationCity: 'Yogyakarta',
//     transport: 'Pesawat',
//     totalCost: 825000 } ]
// */
console.log(travelingIndonesia([], "Cash")); // [];
