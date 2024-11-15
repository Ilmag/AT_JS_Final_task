class ProductsPage {
    get products() {
        return $('span[data-test="title"]')
    }
}

module.exports = ProductsPage