console.log("============Display birth months of 50 peoples who born in the year 1992 and 1993=========");

let MyMap = new Map();
for (let person = 1; person <= 50; person++) 
{
    let birthMonth = Math.floor(Math.random() * 11);
    birthMonth++;
    if (MyMap.has(birthMonth)) 
    {
        MyMap.get(birthMonth).push(person);
    }
    else 
    {
        MyMap.set(birthMonth, [person]);
    }
}
for (let [key, value] of MyMap) 
{
    console.log('People who born in the month ' + key + ' is : ' + String(value));
}