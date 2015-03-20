function LetterCapitalize(str) { 

var strArr = str.split(" ");
  var newStr= "";
  for(var i=0; i<strArr.length;i++){
    
  newStr = newStr+" "+strArr[i].charAt(0).toUpperCase()+strArr[i].slice(1);
  }
  return newStr; 
         
}
