function factorial(n) {
    // Step 1: Handle invalid input (negative numbers or non-numeric values)
    if (typeof n !== 'number' || isNaN(n)) {
        console.log("Invalid input");
        return;
    }
    if (n < 0) {
        console.log("Invalid input");
        return;
    }

    // Step 2: Base case (factorial of 0 is 1)
    if (n === 0) {
        return 1;
    }

    // Step 3: Recursive case (n! = n * (n-1)!)
    return n * factorial(n - 1);
}

// **Testing the function**
console.log(factorial(5));   // Output: 120
console.log(factorial(0));   // Output: 1
console.log(factorial(-3));  // Output: "Invalid input"
console.log(factorial("10"));// Output: "Invalid input"
console.log(factorial(3.5)); // Output: "Invalid input"
