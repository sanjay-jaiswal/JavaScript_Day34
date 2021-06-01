console.log("==========Display Digit which is  repeating twice from 1 to 100 ===========");

let array = new Array();
for(let iterator = 1; iterator<=100; iterator++)
{
    if(iterator%11==0)
    array.push(iterator);
}
console.log("Digit repeat twice from 1 to 100 are : "+array);