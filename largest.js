function largest()
{
    
    let num1=parseInt(prompt('enter  num1:'));
    let num2=parseInt(prompt('enter num2:'));
    let num3=parseInt(prompt('enter num3:'));

    if(num1>num2 && num1>num3)
    {
        alert("num1 is largest")
    }
    else if(num2>num1 && num2>num3)
    {
        alert("num2 is largest")
    }
    else //if(num3>num2 && num3>num1)
    {
        alert("num3 is largest")
    }
}
console.log(largest())