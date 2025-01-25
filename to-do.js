let add=["go","did","ask","walk","run"]

add.length+=1
// console.log(add)
for(let i=add.length-1;i>=1;i--){
    add[i]=add[i-1]
}
add[0]="uu"

add.length-=1
console.log(add)