function sortNames(namesArray) {
    return namesArray.sort((a, b) => a.localeCompare(b));
}


const names = ["Charlie", "Alice", "Bob"];
console.log(sortNames(names)); // Output: ["Alice", "Bob", "Charlie"]
