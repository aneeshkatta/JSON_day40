function flipCoin() 
{
    let headsCount = 0;
    let tailsCount = 0;
    while (headsCount < 11 && tailsCount < 11) 
    {
        const flip = Math.random(); //flip<1
        if (flip < 0.5) 
        {
            headsCount++;
            console.log(`Heads: ${headsCount}`);
        } 
        else 
        {
            tailsCount++;
            console.log(`Tails: ${tailsCount}`);
        }
    }
    if(headsCount==11)
    {
        console.log('Heads won!');
    }
    else
    {
        console.log('Tails won!');
    }
}
flipCoin();