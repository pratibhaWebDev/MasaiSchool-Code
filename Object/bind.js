function setTimeoutGreeting() {
    setTimeout(this.greet.bind(this), 1000);
}

const person = {
    name: "Pratibha",
    greet: function() {
        console.log(`Hello, ${this.name}`);
    }
};

setTimeoutGreeting.call(person);
