function AlphabetSoup(str) { 

  var letters = "abcdefghijklmnopqrstuvwxyz";
  var temp, temp2;
  var newStr="";
  var strArr;
  strArr = str.split("");
  for(var i=0;i<strArr.length;i++){
 for(var j=i+1;j<strArr.length-1;j++){
 if(letters.indexOf(strArr[i])> letters.indexOf(strArr[j])){
  temp2 = strArr[j];
   strArr[j] = strArr[i];
    strArr[i]=temp2;
   
    }
 }
   
  }
  for(var k=0;k<strArr.length;k++){
  newStr = newStr+strArr[k];
  }
  return newStr;
         
}


function AlphabetSoup(str) { 
  return str.split("").sort().join("");    
}