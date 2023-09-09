const fs = require('fs')

class  productManager{
    constructor(path){
        this.path = path
    }

    async createProduct(obj){
        try {
            const products = await this.getProducts()
            let id
            if(!products.length){
                id = 1
            } else{
                id = products[products.length-1].id+1
            }
            products.push({id,...obj})
            await fs.promises.writeFile(this.path, JSON.stringify(products))

        } catch (error) {
            return error
        }
    }

    async getProducts(){
        try {
            if(fs.existsSync(this.path)){
                const info = await fs.promises.readFile(this.path,'utf-8')
                return JSON.parse(info)
            } else{
                return []
            }

        } catch (error) {
            return error
        }
    }

    async getProductById(idProduct){
        try {
            const products = await this.getProducts()
            const product = products.find(u => u.id === idProduct)
            if(product){
                return product
            } else{
                return 'No product'
            }
        } catch (error) {
            return error
        }
    }

    async deleteProduct(idProduct){
        try {
            const products = await this.getProducts()
            const newArrayProducts = products.filter(u => u.id === idProduct)
            await fs.promises.writeFile(this.path, JSON.stringify(newArrayProducts))
        } catch (error) {
            return error
        }
    }

    async updateProduct(idProduct, changes) {
        try {
            const products = await this.getProducts();
            const productIndex = products.findIndex(u => u.id === idProduct);
            
            if (productIndex === -1) {
                console.log('Product not found');
            }

            if(changes.id) {
                delete changes.id;
            }

            products[productIndex] = { ...products[productIndex], ...changes };
            await fs.promises.writeFile(this.path, JSON.stringify(products));
        } catch (error) {
            return error;
        }
    }
}


productManager1 = {
    title: "Producto 1",
    descripcion: "Descripcion producto 1",
    price: 1111,
    thumbnail: path.resolve(),
    code: 123,
    stock: 50,

}

async function test(){
    const product1 = new productManager('Users.json')
    //await product1.createProduct(productManager1)
    //const product = await product1.getUserById(1)
    //await product1.deleteProduct(1)
    //const product1 = await product1.updateProduct(1, price)
    //const product = await product1.getProducts()
}

test()