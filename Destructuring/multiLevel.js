const people = [ { name: "Alice", address: { city: "New York", street: { name: "Broadway", number: 123 } } },
     { name: "Bob", address: { city: "Los Angeles", street: { name: "Sunset Boulevard", number: 456 } } } ];

    //  console.log(people)



const [
    {
        name:name ,
        address: {
            city:city,
            street: { name:namestreet, number:number}
        }
    }

]=people

console.log(`${name} live in ${city} on ${namestreet} `)
// ["Alice lives in New York on Broadway", "Bob lives in Los Angeles on Sunset Boulevard"]