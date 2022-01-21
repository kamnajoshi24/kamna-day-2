// var n = 5;
// var string="";
// for(var i=1;i<=n;i++)
// {
//     for(var j=1;j<n-i;j++)
//     {
    
//         string=string+" "
//     }
//     for(var k=0;k<2 * i-1;k++){
//         string +="*";
//     }

    
//    string += "\n";
// }
// console.log(string);
var n = 5;
// External loop
for (var i = 1; i <= n; i++) {
  // printing spaces
  for (var j = 1; j <= n - i; j++) {
    process.stdout.write(' ')
  }
  // printing stars
  for (var k = 0; k < 2 * i - 1; k++) {
    process.stdout.write('*')
  }
  console.log();
}