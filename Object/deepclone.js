function deepClone(obj) {
    return JSON.parse(JSON.stringify(obj));
}

const original = { name: "Alice", hobbies: ["reading", "traveling"] };

const clone = deepClone(original);

clone.hobbies.push("coding");

console.log("Original:", original); // { name: "Alice", hobbies: ["reading", "traveling"] }
console.log("Clone:", clone);       // { name: "Alice", hobbies: ["reading", "traveling", "coding"] }
