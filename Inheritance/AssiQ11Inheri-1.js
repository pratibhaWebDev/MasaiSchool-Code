function Product(name, price, quantity){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
}
Product.prototype.getDetails=function(){
    console.log(`Product ${this.name} ${this.price} ${this.quantity}`)
}

function Electronics(name,price,quantity,brand,model){
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.brand = brand;
    this.model = model;
}


Electronics.prototype = Object.create(Product.prototype);
Electronics.prototype.constructor = Electronics;

Electronics.prototype.powerOn = function () {
    console.log(`${this.brand} ${this.model} is now powered on.`);
};

Electronics.prototype.powerOff = function () {
    console.log(`${this.brand} ${this.model} is now powered off.`);
};


Electronics.prototype=Object.create(Product.prototype)

function Clothing(name, price, quantity, size, material) {
    Product.call(this, name, price, quantity);
    this.size = size;       
    this.material = material; 
}


Clothing.prototype = Object.create(Product.prototype);
Clothing.prototype.constructor = Clothing;


Clothing.prototype.getSize = function () {
    console.log(`The size of ${this.name} is ${this.size}.`);
};
function Book(name, price, quantity, author, genre) {
    Product.call(this, name, price, quantity);
    this.author = author; 
    this.genre = genre;  
}

Book.prototype = Object.create(Product.prototype);
Book.prototype.constructor = Book;

Book.prototype.getAuthor = function () {
    console.log(`"${this.name}" is written by ${this.author}.`);
};


let laptop = new Electronics("Laptop", 1200, 10, "Dell", "XPS 15");
let tshirt = new Clothing("T-Shirt", 25, 50, "M", "Cotton");
let novel = new Book("The Great Gatsby", 15, 30, "F. Scott Fitzgerald", "Fiction");

laptop.getDetails();
tshirt.getDetails(); 
novel.getDetails(); 

laptop.powerOn();  
laptop.powerOff(); 

tshirt.getSize();  
novel.getAuthor();



