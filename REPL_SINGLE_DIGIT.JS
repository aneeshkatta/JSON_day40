var prompt =require('prompt-sync')();
var input =prompt("enter the power number of base 2 (till 8 only )");
var N=parseInt(input);
if(N<=8)
{
    for(let i=0;i<=N;i++)
    {
        const power=Math.pow(2,i)
        console.log(`2^${i}=${power}`);
    }
}
else
{
    console.log('Enter below 8 only');
}