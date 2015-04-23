function ExOh(str) { 
var countx=0,counto=0;
  for(var i=0;i<str.length;i++){
  if(str[i] === "x"){
  countx++;
  }else{
  counto++
  }
  }
  if(countx===counto){
  return true;
  }else{
  return false;
  }
  //return str; 
         
}
function ExOh(str) { 
  var os = str.match(/o/gi); 
  var xs = str.match(/x/gi);
  if(os === null || xs == null){
    return false; 
  }
  return os.length === xs.length;
}
