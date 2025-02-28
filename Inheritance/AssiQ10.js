function Car(make, model, year, type, isAvailable = true) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.type = type; 
    this.isAvailable = isAvailable;
  }
  
  function Customer(name) {
    this.name = name;
    this.rentedCars = [];
  }


//   add a method 
Car.prototype.rentCar=function(car){
    if(car.isAvailable){
        car.isAvailable=false
        this.rentedCars.push(car)
        console.log(`${this.name} rented ${car.make} ${car.model}`);
    }else{
        console.log("already rented")
    }
}

function PremiumCustomer(name,discountRate){
    Customer.call(this,name)
    this.discountRate = discountRate;
}
PremiumCustomer.prototype = Object.create(Customer.prototype);  
PremiumCustomer.prototype.constructor = PremiumCustomer; 

function calculateRentalPrice(car,days,customer){
    const basePricePerDay=50;
    let typeMultiplier=car.type==="SUV"?1.5:1;

    let totalPrice=basePricePerDay * typeMultiplier * days;

    if(customer instanceof PremiumCustomer){
        totalPrice=totalPrice*(1-customer.discountRate);
    }
    console.log(`Total rental price for ${days} days: $${totalPrice.toFixed(2)}`);
    return totalPrice;
}

Customer.prototype.rentCar=function(car){
    setTimeout(()=>{
        car.isAvailable=true
        this.rentedCars=this.rentCar.filter(c=>c!==car);
        console.log(`${this.name} returned ${car.make} ${car.model}`);
    },2000)
}

function Maintenance(car,delay){
    console.log(`${car.make} ${car.model} is under maintenance...`)
    setTimeout(()=>{
        car.isAvailable=true;
        console.log(`${car.make} ${car.make} is ready for rental`)
    },delay)
}

let car1= new car("Toyota","Corolla",2020,"sedan")
let car2=new car("Honda","CR-V",2022,"SUV")


let customer1=new Customer("John Doe")
let premiumCustomer1= new PremiumCustomer("Gunja",10)
customer1.rentCar(car1)
premiumCustomer1.rentCar(car2)

calculateRentalPrice(car2,3,premiumCustomer1);

setTimeout(()=>{
    customer1.rentCar(car1)
    premiumCustomer1.rentCar(car2)
},5000)

setTimeout(()=>{
    Maintenance(car1,3000)
},7000)
