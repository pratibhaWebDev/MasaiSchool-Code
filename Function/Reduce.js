function countCategories(categories) {

    let categoryCount = categories.reduce((acc, category) => {
        acc[category] = (acc[category] || 0) + 1; 
        return acc;
    }, {}); 

    return categoryCount;
}

function sortedCategories(categories) {
    let categoryCount = countCategories(categories);

    return Object.entries(categoryCount) 
        .sort((a, b) => b[1] - a[1]) 
        .map(entry => entry[0]); 
}

const categories = ["electronics", "clothing", "electronics", "toys", "clothing", "toys", "toys"];


console.log(countCategories(categories)); 
console.log(sortedCategories(categories)); 
