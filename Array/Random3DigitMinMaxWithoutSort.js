console.log("=========Find 3 digit Min And Max number using Random function ");

//Declaring arry of size 10.
let numArray = new Array(10);
for(let i=0;i<numArray.length;i++)
{
    numArray[i]=Math.floor(Math.random()*900)+100;
}
console.log("Array without sort : "+numArray);
//Bubble sort is using to sort the array.
for(let i=0;i<numArray.length;i++)
{
    for(let j=0;j<numArray.length-1;j++)
    {
        if(numArray[j]>numArray[j+1])
        {
            let temp = numArray[j];
            numArray[j]=numArray[j+1];
            numArray[j+1]=temp;
        }
    }
}
console.log("Array with sort : "+numArray);
console.log("2nd largest element: "+numArray[(numArray.length-2)]);
console.log("2nd smallest element: "+numArray[1]);
