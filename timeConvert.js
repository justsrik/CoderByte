
function TimeConvert(num) { 

var hour, min;
  hour = num/60
  if(hour<1){
  hour = 0;
  }else{
  hour = hour.toFixed(0);
  }
  min = num%60;
  
  return hour+":"+min; 
         
}

function TimeConvert(num) { 
  var minutes = num % 60;
  var hours = Math.floor(num/60);
  return hours + ":" + minutes;
}
