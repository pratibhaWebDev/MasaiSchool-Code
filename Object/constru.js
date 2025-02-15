function Person(name,age){
    this.name=name;
    this.age=age;

    this.displayInfo=function(){
        console.log("Name: "+this.name);
    }
}

const person1=new Person("Pratibha",24)
const boundDisplay=person1.displayInfo.bind(person1)
boundDisplay();