function findMagicNumber() 
{
    var prompt =require('prompt-sync')();
    const n = prompt('Enter a number n between 1 and 100');
    let low = 1;
    let high = 100;
    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const response = prompt(`Is the magic number less than or equal to ${mid}? (yes/no)`);
        if (response === 'yes') {
        high = mid;
        } else {
        low = mid + 1;
        }
    }
console.log("Magic number:"+low);
}  
findMagicNumber();