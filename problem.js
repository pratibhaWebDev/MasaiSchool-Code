// let n=5
// let fact=1
// for(i=1;i<=n;i++){
//     fact=fact*i
// }
// console.log(fact)
// let num=144
// let rev=0
// let sum=0
// for(let i=num;i>0;i = Math.floor(num / 10)) {
//     let rem=num%10
//     sum+=rem
//     rev=rev*10+rem

// }
// console.log(sum)  //output: 9

let num = [12, 23, 22];

function add(n) {  // Accept a number as an argument
    let sum = 0;

    while (n > 0) {  
        let rem = n % 10;  // Get the last digit
        sum += rem;  // Add the digit to sum
        n = Math.floor(n / 10);  // Remove last digit
    }
    return sum; // Return the sum of digits
}


for (let i = 0; i < num.length; i++) {
    let digitSum = add(num[i]);  // Pass each number to add()
    console.log(`Sum of digits of ${num[i]}: ${digitSum}`);
}
