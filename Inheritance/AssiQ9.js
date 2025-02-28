function Person(name,string){
    this.name=name;
    this.string=string;
}

Person.prototype.introduce=function(){
    console.log("Hi, my name is ${this.name} and I am ${age} years old")
}

function Employee (name, age, jobTitle){
    Person.call(this,name,age);
    this.jobTitle = jobTitle; 
}

Employee.prototype = Object.create(Person.prototype); // Inherit methods
Employee.prototype.constructor = Employee; 

Employee.prototype.work=function(){
    console.log("${name} working as a ${this.jobTitle}")
}

let person1 = new Person("Gunja", 30);
person1.introduce();

let employee1 = new Employee("Pratibha", 25, "Software Engineer");
employee1.introduce(); 
employee1.work(); 