/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi
*/
function changeVocals(str) {
  //code di sini
  let result = '';

  for (let i = 0; i < str.length; i++) {
    if (str[i] == "a") {
      result += str[i] = "b";
    } else if (str[i] == "i") {
      result += str[i] = "j";
    } else if (str[i] == "u") {
      result += str[i] = "v";
    } else if(str[i] == 'e') {
      result += str[i] = "f";
    } else if(str[i] == 'o') {
      result += str[i] = "p";
    } else {
      result += str[i];
    }
  }

  return result;
}

function reverseWord(str) {
  //code di sini
  let result = '';
  for(let i = str.length - 1; i >= 0; i--) {
    result += str[i];
  }
  return result;
}

function setLowerUpperCase(str) {
  //code di sini
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] == str[i].toLowerCase()) {
      result += str[i].toUpperCase();
    } else if(str[i] == str[i].toUpperCase()) {
      result += str[i].toLowerCase();
    } else {
      result += str[i];
    }
  }
  return result;
}

function removeSpaces(str) {
  //code di sini
  let result = '';
  for(let i = 0; i < str.length; i++) {
    if(str[i] == ' ') {
      result += str[i + 1];
    } else {
      result += str[i];
    }
  }
  return result;
}

function passwordGenerator(name) {
  //code di sini
  if(name.length < 5) {
    return "Minimal karakter yang diinputkan adalah 5 karakter";
  }
  let changeVocal = changeVocals(name);
  let reverseWords = reverseWord(changeVocal);
  let setLowerUpperCases = setLowerUpperCase(reverseWords);
  let removeSpace = removeSpaces(setLowerUpperCases);
  
  let result = removeSpace;;

  return result;
}

console.log(passwordGenerator("Sergei Dragunov")); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator("Dimitri Wahyudiputra")); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator("Alexei")); // 'JFXFLb'
console.log(passwordGenerator("Alex")); // 'Minimal karakter yang diinputkan adalah 5 karakter'
