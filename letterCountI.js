function LetterCountI(words){
var wordsArr=[],actualCount=[], totalActual, wordIndex;
wordsArr = words.split(" ");
for (var i = 0; i < wordsArr.length; i++) {
  actualCount.push(countRepeated(wordsArr[i]));
}
 totalActual = getMaxOfArray(actualCount);
  wordIndex =actualCount.indexOf(totalActual);
  if(totalActual !==0){
  return wordsArr[wordIndex];
  }else{
  return -1;
  }

}

function countRepeated(word){
  var letterArr=[], count, countArr=[], countTotal = 0;
  letterArr = word.split("");
  for (var i = 0; i < letterArr.length; i++) {
    count = lookForRepeated(letterArr[i], letterArr);
    countArr.push(count);
  }
  for (var j = 0; j < countArr.length; j++) {
    countTotal = countTotal+countArr[j];
  }
  return countTotal;
}

function lookForRepeated(letter, lettersArr){
var count=0;
if(lettersArr.indexOf(letter) !== lettersArr.lastIndexOf(letter)){
  count++;
}
return count;
}
function getMaxOfArray(numArray) {
  return Math.max.apply(null, numArray);
}
   
