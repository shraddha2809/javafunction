

function reverse()
{
   var reverse=0,remainder;
   
   let n=parseInt(prompt('enter a number(reverse)'));

   while(n>0)
   {
      remainder=n%10;
      n=parseInt(n/10);
      reverse=reverse*10+remainder;
   }  
   alert (reverse);
}
console.log(reverse());
