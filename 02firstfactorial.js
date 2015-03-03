function FirstFactorial(num) { 

  var number=1;
  while(num>1){
    number=number*num
  num--;
    
  }
  return number; 
         
}

//optimized
function FirstFactorial(num) { 
  return num<=1?1:num*(FirstFactorial(num-1)); 
}