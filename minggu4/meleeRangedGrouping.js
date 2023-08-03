/*
Diberikan function meleeRangedGrouping yang menerima 1 parameter berupa string, implementasikan meleeRangedGrouping agar dapat menghasilkan multidimensional array seperti yang diminta.

Format string yang diberikan adalah: <nama_hero>-<tipe_hero>,<nama_hero>-<tipe-hero>, ...

Output yang diharapkan: [ [ <daftar_hero_dengan_tipe_ranged> ], [ <daftar_hero_dengan_tipe_melee> ] ]

Jika input adalah string kosong ('') maka return array kosong
*/

function meleeRangedGrouping(str) {
  if (str === "") {
    return [];
  }

  let heroList = [];

  let list = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] == ",") {
      continue;
    } else {
      list += str[i];
    }

    if (str[i + 1] == "," || str[i + 1] == null) {
      heroList.push(list);
      list = "";
    }
  }
  let ranged = [];
  let melee = [];
  let name = '';
  for (let i = 0; i < heroList.length; i++) {
    for(let j = 0; j < heroList[i].length; j++) {
      if(heroList[i][j] == '-' && heroList[i][j + 1] == 'R') {
        for(let k = 0; k < j; k++) {
          name += heroList[i][k];
        }
        ranged.push(name);
        name = "";
      } 

      if (heroList[i][j] == "-" && heroList[i][j + 1] == "M") {
        for (let k = 0; k < j; k++) {
          name += heroList[i][k];
        }
        melee.push(name);
        name = "";
      }
    }
  }
  return [ranged, melee]
}

// TEST CASE

console.log(
  meleeRangedGrouping(
    "Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged"
  )
);
// [ ['Razor', 'Invoker', 'Sniper'], ['Meepo', 'Axe'] ]

console.log(
  meleeRangedGrouping("Drow Ranger-Ranged,Chen-Ranged,Dazzle-Ranged,Io-Ranged")
);
// [ ['Drow Ranger', 'Chen', 'Dazzle', 'Io'], [] ]

console.log(meleeRangedGrouping("")); // []
