

function checkNo()
{
    let number=parseInt(prompt("enter a number for check positive & nagetive & zero:"));

    if(number>0)
    {
        alert("number is positive");
    }
    else if(number==0)
    {
        alert("number is zero");
    }
    else
    {
        alert("number is negative");
    }
}
checkNo();