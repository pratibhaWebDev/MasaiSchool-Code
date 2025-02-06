let str="abcbaa"
// let arr=str.split("")
// console.log(arr)//abcbaa
let count={}
for(let i=0;i<str.length;i++){
    let char=str[i]
    // console.log(char);
    if(count[char]){
        count[char]++
    }else{
        count[char]=1
    }
}

let minfreq =Infinity;
let result=""

for(key in count){
    if(count[key]<minfreq){
        minfreq=count[key]
        result=key

    }
}
console.log(`Getting Lower Frequency : ${result}`);