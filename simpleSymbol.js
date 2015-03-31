function SimpleSymbols(str) { 
  var letters = "abcdefghijklmnopqrtuvwxyz";
  var ret = false;
  for(var i=0;i<str.length;i++){
  if( letters.indexOf(str.charAt(i)) !== -1){
  if(str.charAt(i-1) === "+" && str.charAt(i+1) === "+"){
   	ret = true;
  }else{
  	return false;
  }
  }	
  }
    return ret;     
  }

function SimpleSymbols(str) { 
  var one = str.match(/^\+[a-z]\+/ig);
  var two = str.match(/\+[a-z]^\+/ig);
  if(one === null && two === null) return false;
  return true;
                     
}
   
