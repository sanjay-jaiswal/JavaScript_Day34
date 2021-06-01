console.log("=========Display which number of dice is occuring min and maximum times========\n");

let dice = 0;
Math.floor (Math.random() * 6) + 1;
let StoreDiceNum = new Map([[1,0], [2,0], [3,0], [4,0], [5,0], [6,0]]);
var count = 0;
while(count != 10) {
    dice = Math.floor (Math.random() * 6) + 1;
    count = updateDice(dice);
}
console.log(StoreDiceNum.keys());
console.log(StoreDiceNum);
var occurences = Array.from(StoreDiceNum.values());
var max = Math.max(...occurences);
var min = Math.min(...occurences);
console.log("\nMaximum die number comes is  = " + max);
console.log("Minimum die number comes is = " + min);
StoreDiceNum.forEach((value, key)=>{
    if(value == max){
        console.log("Maximum : " + key + " is occuring  " + value + " times");
    }
})

StoreDiceNum.forEach((value, key)=>{
    if(value == min){
        console.log("Minimum : " + key + " is occuring " + value + " times");
    }
})
function updateDice(num){
    var value = StoreDiceNum.get(num);
    value++;
    StoreDiceNum.set(num,value);
    return value;
}