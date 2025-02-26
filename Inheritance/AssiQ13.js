function createInverntoryItem(name, category, price) {
    return {
        name,
        category,
        price,
        describeItem() {
            console.log(`This is a ${category} item called ${name} and it costs ${price}`)
        }
    }
}

function addItemDiscount(inventoryItem,discountPercent){
    inventoryItem.discountPercent=discountPercent;
    inventoryItem.discountedPrice=inventoryItem.price * (1-discountPercent/100);

    inventoryItem.applyDiscount=function(){
        console.log(`After ${this.discountPercent}% discount,  the price is $${this.discountedPrice.toFixed(2)}`)
    }

    return inventoryItem;
}

const item=createInverntoryItem("Laptop","Electronics",1000);
item.describeItem()

const discountedItem=addItemDiscount(item,20);
discountedItem.applyDiscount()  