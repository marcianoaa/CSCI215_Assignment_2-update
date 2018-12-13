
var finished = false;
var numSet = [];

while (finished !== true){
    var input = prompt("Enter positive numbers. When complete, enter -1", "");
    if (input == -1){
        finished = true;
    }
    else{
        numSet.push(input)
    }
}
console.log(numSet);

var max;
max = numSet[0];
for (var x=1; x < numSet.length; x++){
    if (numSet[x] > max){
        max = numSet[x];
    }
}
console.log(max);

var min;
min = numSet[0];
for (var v=1; v < numSet.length; v++){
    if (numSet[v] < min){
        min = numSet[v];
    }
}
console.log(min);

var total = 0;
for (var z=0; z < numSet.length; z++){
    total = total + parseInt(numSet[z]);
}
var mean = total / numSet.length;
console.log(mean);

numSet.sort();
var medianPos1;
var medianPos2;
var median;
if (numSet.length % 2 === 0){
    medianPos1 = (numSet.length / 2) - 1;
    medianPos2 = medianPos1 + 1;
    median =  ( parseInt(numSet[medianPos1]) + parseInt(numSet[medianPos2]) ) / 2;
}
else{
    medianPos1 = Math.ceil(numSet.length/2);
    median = numSet[medianPos1-1];
}
console.log(median);

var evenNums = 0;
var oddNums = 0;
for (var y=0; y < numSet.length; y++){
    if (numSet[y] % 2 === 0){
        evenNums++;
    }
    else{
        oddNums++;
    }
}
console.log(evenNums);
console.log(oddNums);

function isPrime(userNum) {
    for(var m = 2; m < userNum; m++) {
        if(userNum % m === 0) {
            return false;
        }
    }
    return true;
}
var primeNums = 0;
for (var p = 0; p < numSet.length; p++){
    if ( isPrime(numSet[p]) ){
        primeNums++;
    }
}
console.log(primeNums);

var powerOfTwo = 0;
for (var w = 0; w < numSet.length; w++){
    if (Math.log2(numSet[w]) % 1 === 0){
        powerOfTwo++;
    }
}
console.log(powerOfTwo);


document.getElementById("numSet").innerHTML = "{" + numSet + "}";
document.getElementById("max").innerHTML = max;
document.getElementById("min").innerHTML = min;
document.getElementById("mean").innerHTML = mean;
document.getElementById("median").innerHTML = median;
document.getElementById("evenNums").innerHTML = evenNums;
document.getElementById("oddNums").innerHTML = oddNums;
document.getElementById("primeNums").innerHTML = primeNums;
document.getElementById("powerOfTwo").innerHTML = powerOfTwo;






