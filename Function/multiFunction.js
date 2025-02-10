function inner(){
    var age=10;
    function displayAge(){
        console.log(age)
    }
    displayAge()
    function changeAge(){
        age=20
        console.log(age)
    }
    changeAge()
}
console.log(inner())