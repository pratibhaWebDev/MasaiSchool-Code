function createInventoryItem(name,category,price){
    return{
        name,
        category,
        price,
        describeItem(){
            console.log(`Item: ${this.name}, Category: ${this.category}, Price: ${this.price}`);

        }
    }
}

function addItemDiscount(inventoryItem,discountPercent){
    return{
        ...inventoryItem,
        discountPercent,
        discountPrice:inventoryItem.price*(1-discountPercent/100),
        applyDiscount(){
            console.log(`Discount applied to ${this.name}. New price: ${this.discountPrice}`);
        }
    }
}

const item=createInventoryItem("Laptop","Electronics",1500)
item.describeItem()

const discountedItem=addItemDiscount(item,10);
discountedItem.applyDiscount()