//fibonacci series
/*let number=parseInt(prompt('enter the number of terms:'));
let n1=0, n2=1, nextTerm ;
function fibonacciSeries()
{ if(number>0)
    {
        console.log("number");
        fibonacciSeries(--number);
    }
    for(let i=1; i<=number; i++)
    {
        nextTerm=n1+n2;
        n2=nextTerm;
    }
   console.log(n2=nextTerm);  
}
fibonacciSeries(100);
console.log(fibonacciSeries());*/


function fibonacci()
{
    let number=parseInt(prompt('enter the number of terms(fibonacci):'));
    let n1=0, n2=1 , nextTerm;

    console.log('fibonacci Series')
    for(let i=1; i<=number; i++)
    {
      console.log(n1);
      nextTerm=n1+n2;
      n1=n2;
      n2=nextTerm;
        
    }
}
fibonacci();



