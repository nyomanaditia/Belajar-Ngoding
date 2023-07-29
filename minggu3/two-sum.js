const twoSum = (array, goal) => {
  //code here
  let obj = {}; //nampung apa yg sudah kita cek contoh { 5: 0, 7: 1 }
  for (let i = 0; i < array.length; i++) {
    if (obj[goal - array[i]]) {
      //pake pendekatan matematika dikit wkwk
      return [obj[goal - array[i]], i];
    } else {
      obj[array[i]] = i;
    }
  }
};

console.log(twoSum([1, 3, 9, 7, 6, 11, 14], 13)); //akan mereturn index[1,2]
//karena index 1 ditambah index 2 hasilnya sama dengan parameter goal, yaitu 13
