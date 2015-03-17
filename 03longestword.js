function LongestWord(sen) { 

  var senArray = sen.split(" ");
  var arrLen;
  var firstword, secondword;
  for(var i=0; i<senArray.length; i++){
  //arrLen = 1
    firstword = senArray[i]+"";
    secondword = senArray[i+1]+"";
  if(firstword.length >= secondword.length){
    if(/^[a-zA-Z0-9- ]*$/.test(firstword)!== false ){
  arrLen = firstword;}else{
  arrLen = secondword;
  }
    }
    
  }
  return arrLen; 
         
}