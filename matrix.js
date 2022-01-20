var items =[
     
    [1,  2, ],//this is row 0
    [4,  5, ],//this is row 1
]
var item=[
     
    [1,  2, ],//this is row 0
    [4,  3, ],//this is row 1
]

var empy=[2][2]=0;
console.log(empy);
for(i=0;i<2;i++)
{
    
    
for(j=0;j<2;j++)    {


if(i==j)
{
    empy=empy+(items[i][j]*item[i][j])
    console.log(items[i][j])
    console.log(item[i][j])
    console.log(empy)

}
else{
 
    console.log()
}




}

}
