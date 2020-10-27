let sum=0;
let number=prompt('enter a tree-digit positive integer for armstrong:');

function armstrong()
{
    let temp=number;
    while(temp>0)
    {
        let remainder=temp%10;
        sum+=remainder*remainder*remainder;
        temp=parseInt(temp/10);
    }
    if(sum==number)
    {
        alert('number is armstrong')
    }
    else
    {
        alert('number is not armstrong')
    }

}
console.log(armstrong());