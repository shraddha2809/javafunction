//year is leap or not
//condition...
//1. the year is multiple of 400
//2. the year is multiple of 4 and not multiple of 100

function checkLeapYear()
{
    let year=parseInt(prompt('enter  year:'))
    
    if((0==year%4)&&(0!=year%100)||(0==year%400))
    {
        alert('year is a leap year')
    }
    else
    {
        alert('year is not a leap year')
    
    }
}
console.log(checkLeapYear());