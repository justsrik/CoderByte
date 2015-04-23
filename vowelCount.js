function VowelCount(str) { 

  var vowels = "aeiou";
  var count=0;
  for(var i=0;i<str.length;i++){
  if(vowels.search(str[i])!== -1){
  count++;
  }
  }
  return count; 
         
}




function VowelCount(str) { 
  var vowels = str.match(/[aeiou]/g);
  return vowels.length;
}
