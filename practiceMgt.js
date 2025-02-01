let arr=[1,2,3,4,5]
for(i=0;i<arr.length-1;i++){
  arr[i]=arr[i+1]
}
arr.length-=1


arr.length+=2
console.log(arr)

for(i=arr.length-1;i>=2;i--){
  arr[i]=arr[i-2]
}


arr[0]=1 
arr[1]=2
console.log(arr)