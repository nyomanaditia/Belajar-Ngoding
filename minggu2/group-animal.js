/*
diberikan sebuah function groupAnimals(animals) yang menerima satu parameter berupa array,
fungsi ini akan me-return array 2 dimensi
*/
function groupAnimals(animals) {
  // you can only write your code here!
  let result = [];
  let animalsSort = animals.sort();

  let group = [];
  for(let i = 0; i < animalsSort.length; i++) {
    group.push(animalsSort[i]);

    if(i === animalsSort.length - 1 || animalsSort[i][0] !== animalsSort[i + 1][0] ) {
      result.push(group);
      group = [];
    }
  }
  
  return result;
}

// TEST CASES
console.log(groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil"]));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(["cacing", "ayam", "kuda", "anoa", "kancil", "unta", "cicak"])
);
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
