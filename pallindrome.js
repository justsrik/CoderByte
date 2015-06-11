function Palindrome(str) { 
  
  var strRev = str.split(/\s*/).reverse().join();
  var strStr = str.split(/\s*/).join();
if(strStr === strRev){
return true;
}else{
return false;
}
         
}