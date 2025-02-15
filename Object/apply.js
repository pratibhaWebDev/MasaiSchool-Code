function app(a,b){
    return a*b;
}
let result=app.apply(null,[5,3,6])
console.log(result)function calculateProduct(a, b) {
    return a * b;
}

let numbers = [5, 3, 6];
let result = numbers.reduce(calculateProduct);
console.log(result);