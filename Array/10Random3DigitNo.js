console.log("Find 2nd largest and 2nd smallest element in array : ");

let storeArray=new Array();
for(let s=0;s<10;s++)
{
    let randomValue=Math.floor(Math.random()*900+100);
    storeArray.push(randomValue);
}
console.log("Ramdom array before sorting are  :  \n"+storeArray);

console.log("Array after sorting are  :  \n"+storeArray.sort());
console.log("Second smallest number in array is : "+storeArray[1]);
console.log("Second largest number in array is : "+storeArray[8]);

console.log("Smallest number in array is : "+storeArray[0]);
console.log("Largest number in array is : "+storeArray[9]);
