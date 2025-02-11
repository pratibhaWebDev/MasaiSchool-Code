const checkout = {
    items: [],
    total: 0,

    addItem(item) {
        // Convert price to a number if it's a valid numeric string
        const price = parseFloat(item.price);
        if (isNaN(price)) {
            console.log("Invalid price.");
            return;
        }

        this.items.push(item);
        this.total += price; // Use the converted number
    },

    getTotal() {
        return `Total: $${this.total.toFixed(2)}`; // Fixed template literal syntax
    }
};

// Testing
checkout.addItem({ name: "Coffee Maker", price: "99.95" }); // Now correctly converts string to number
checkout.addItem({ name: "Milk", price: 3.50 });

console.log(checkout.getTotal()); // Output: "Total: $103.45"
