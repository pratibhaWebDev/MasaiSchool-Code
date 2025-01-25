// Problem Statement: You are creating a score management system for student results. Start with an array of 10 student scores.
//  The program should do the following:

// For any student with a score below 40, increase their score by 20. For students with scores over 90, adjust their score to a maximum of 90. 
// Count and log how many students passed (score of 50 or more) after the adjustments. Log the final adjusted array of scores.

let arr=[45,67,23,78,98,34,67,76,45,54,67]
let countScore=0
for(let i=0;i<arr.length;i++){
   
    if(arr[i]<=40){
        console.log(arr[i]+20)
        
    }

    if(arr[i]<50){
        countScore++;
    }
}
console.log("score of 50 or more ",countScore)