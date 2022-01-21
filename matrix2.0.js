// let x = 2;
// let y = 2;
// const a = [[1,2], [3,4]]
// const b = [[1,4], [2,7]]
// const c = [[],[]]
// for(let i = 0; i < x; i++)
// {
//     for(let j = 0; j < y; j++)
//     {
//         m3[i][j] = 0;
//         for(let k = 0; k < y; k++)
//         {
//            c[i][j] = c[i][j] + c[i][k] *c[k][j]
//         }
//     }
// }
// console.log(c)
let x = 2;
let y = 2;
const a = [[8,4], [3,4]]
const b = [[5,6], [2,5]]
const c = [[],[]]
for(let i = 0; i < x; i++)
{
    for(let j = 0; j < y; j++)
    {
        c[i][j] = 0;
        for(let k = 0; k < y; k++)
        {
            c[i][j] += a[i][k] * b[k][j]
        }
    }
}
console.log(c)