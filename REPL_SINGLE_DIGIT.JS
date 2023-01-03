let num=5;let a=0;let i;
for (i = 1; i < num; i++)
{
    if (num % i == 0 && num!=0 && num!=1)
    {
        a++;
    }
}
if(a==1)
{
    console.log( num+ " is Prime Number");
}
else
{
    console.log( num+ " is not a Prime Number");
}
