"use strict";
{
    function getMostExpensiveProduct(products) {
        if (products.length === 0) {
            return null;
        }
        let highestProduct = products[0];
        for (const product of products) {
            if (product.price > highestProduct.price) {
                highestProduct = product;
            }
        }
        return highestProduct;
    }
    const products = [
        { name: "Pen", price: 10 },
        { name: "Notebook", price: 25 },
        { name: "Bag", price: 50 },
    ];
    console.log(getMostExpensiveProduct(products));
    // Output: { name: "Bag", price: 50 }
}
