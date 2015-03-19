
function LetterChanges(str) { 

	var letters = "abcdefghijklmnopqrstuvwxyz";
  var vowels= "aeiou";
  var newStr="";
  	for(var i=0;i<str.length;i++){
    if(str[i] !== "*" && letters.search(str[i]) < 26 && letters.search(str[i]) !== -1 ){
      if(vowels.search(letters[(letters.search(str[i])+1)]) !== -1){
    newStr = newStr+letters[(letters.search(str[i])+1)].toUpperCase();
      }else{
      newStr = newStr+letters[(letters.search(str[i])+1)];
      }
    } else if(str[i] == "*" || letters.search(str[i]) == -1 ){
    newStr = newStr+str[i];
    }else{
    newStr = newStr+letters[0]
    }
    }
  
  return newStr; 
         
}

	
