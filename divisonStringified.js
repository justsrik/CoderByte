function DivisionStringified(num1,num2) {
//function numbersWithComma(num1, num2){
var abcd, checkLength;
abcd = Math.round(num1/num2);
checkLength = findLength(abcd);
//console.log(checkLength);
  return checkLength;

}
function findLength(num){
var numStr = num.toString();
var numLength = numStr.length, numToReturn;
if(numLength<=3){
return numStr;
}else{
var numArr=[];
numArr = numStr.split("");
switch(numLength){
case 4:
numArr.splice(1,0,",");
//console.log(numArr.toString());
numToReturn = convToNum(numArr);
break;
  case 5:
   numArr.splice(2,0,",");
//console.log(numArr.toString());
numToReturn = convToNum(numArr);
break;
    case 6:
   numArr.splice(1,0,",");
//console.log(numArr.toString());
numToReturn = convToNum(numArr);
break;
}
}
return numToReturn;
}
function convToNum(arr){
var strArr ="", toNum;
for(var i=0;i<arr.length;i++){
strArr = strArr+arr[i];
}
//console.log(strArr)
//toNum = parseFloat(strArr,10);
return strArr;
} 
