function palindrome()
{
    var reverse=0,remainder;
    
    let n=parseInt(prompt('enter a number(palindrome)'));
    let z=n;
    while(n!=0)
    {
        remainder=n%10;
        n=parseInt(n/10);
        reverse=reverse*10+remainder;
    }
    
    if(z==reverse )
    {
        alert("This is palindrome")
    }
    else
    {
        alert("This is not palindrome")
    }
   

}
console.log(palindrome());