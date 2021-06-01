const prompt=require('prompt-sync')();
let n = Number(prompt('Enter the number: '));
let primeFactorsArr= [];
// Print the number of 2s that divide n
while (n % 2 == 0) 
{
    primeFactorsArr.push(2);
    n = n / 2;
}  
// n must be odd at this point. So we can skip  
// one element (Note i = i+2)  
for (let i = 3; i * i <= n; i = i + 2) 
{
    // While i divides n, print i and divide n  
    while (n % i == 0) 
    {
        primeFactorsArr.push(i);       
        n = n / i;
    }
}