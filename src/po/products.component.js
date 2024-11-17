/**
 * Contains a https://www.saucedemo.com/inventory.html page selector
 * for secondary header Products
 */

class ProductsHeader {
    get products() {
        return $('span[data-test="title"]')
    }
}

module.exports = ProductsHeader