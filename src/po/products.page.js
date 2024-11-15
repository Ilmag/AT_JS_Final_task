/**
 * Contains a https://www.saucedemo.com/inventory.html page selector
 * for secondary header Products
 */

class ProductsPage {
    get products() {
        return $('span[data-test="title"]')
    }
}

module.exports = ProductsPage