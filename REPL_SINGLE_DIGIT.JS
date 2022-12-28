//program that reads 5 Random 3 Digit values and then outputs the minimum and the maximum value
let max=999;
let min=100;
function rand()
{
    let num=( Math.floor(Math.random() * (max - min) + min));
    return num;
}
let num1=rand(),num2=rand(),num3=rand(),num4=rand(),num5=rand();
console.log("numbers:"+num1+" "+num2+" "+num3+" "+num4+" "+num5);
let max_result=Math.max(num1,num2,num3,num4,num5);
let min_result=Math.min(num1,num2,num3,num4,num5);
if (min_result>100 && max_result<=999)
{
console.log("max_result:"+max_result+" min_result:"+min_result);
}
else
{
    console.log("error in three digit number generation");
}