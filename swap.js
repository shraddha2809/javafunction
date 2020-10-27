var a,b;
a=14;
b=62;
console.log(a);
console.log(b);
function swap()
{
    a=a+b;
    b=a-b;
    a=a-b;
    alert(a);
    alert(b);
}
swap();