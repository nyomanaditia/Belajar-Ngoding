function toUpperCaseFirstLetter(word) {
  let result = "";
  for(let i = 0; i < word.length; i++) {
    if(i === 0 || word[i-1] === " ") {
      result += word[i].toUpperCase();
    } else {
      result += word[i];
    }
  }
  return result;
}

console.log(toUpperCaseFirstLetter("i nyoman aditia"));
console.log(toUpperCaseFirstLetter("adalah seorang web developer"));