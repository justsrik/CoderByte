function FirstReverse(str) { 
	var chars="";
  	for(i=str.length;i>=0;i--){
  	chars = chars+str.charAt(i);
  }
	
  return chars; 
         
}
  
//Optimized
  function FirstReverse(str) { 

  return str.split("") /* put our string into an array of characters */
            .reverse() /* reverse our array of characters */
            .join(""); /* join our array back in a single string */
         
}