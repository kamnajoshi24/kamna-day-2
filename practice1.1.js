var a=0,b=1;
console.log(a);
console.log(b);
for(var i=0;i<=10;i++){
    var fibo = a+b;
    console.log(fibo);
    a=b;
    b=fibo;
}
