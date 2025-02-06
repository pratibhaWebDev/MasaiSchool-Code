// 1
// 2 3
// 4 5 6
// 7 8 9 10
let n=4
let count=1
for(let i=1;i<=n;i++){
    let row=""
    for(let j=1;j<=i;j++){
        row+=count+" "
        count++
    }
    console.log(row)
}