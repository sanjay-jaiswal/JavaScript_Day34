console.log("Sum of three integers adds to zero : ");

const Prompt = require('prompt-sync')();
let arrStore = [];
let num1 = Number(Prompt('Pleae enter first number : '));
arrStore.push(num1);
let num2 = Number(Prompt('Please enter second number : '));
arrStore.push(num2);
let num3 = Number(Prompt('Please enter third number : '));
arrStore.push(num3);
let sum = 0;
function Sum(num) 
{
    sum = sum + num;
}
arrStore.forEach(Sum);
if (sum == 0)
    console.log("Sum is zero!!");
else
    console.log("Sum is not zero");