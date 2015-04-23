function PrimeTime(num) { 

  if(num%2 !== 0){
  return true;
  }else if(num === 2){
  return true;
  }else{
  return false;
  } 
   
}


function PrimeTime(num) { 
  for(var i=2;i<num;i++){
    if(num % i === 0) return false
  }
  return true;
}


