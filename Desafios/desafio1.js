class productManager{
    constructor() {
        this.products = []
    }

    addProduct(title, description, price, thumbnail, stock) {
        if (title == "" || description == "" || price <= 0  || thumbnail == ""|| stock >= 0) {
            let newCode;

            do {
                newCode = Math.floor(Math.random() * 100);
            } while (this.products.some(product => product.code === newCode));
            
            const product = {
                id: this.#generarId(),
                code: newCode,
                title,
                description,
                price,
                thumbnail,
                stock,
            };

            this.products.push(product);

        } else {
            console.log("Error: empty fields or invalid data");
        }

    }
    getProducts(){
        this.products.forEach(product => {
            console.log(product)
        })
    }

    getProductById(idProduct){
        const product = this.products.find(e => e.id == idProduct)
        if(!product){
            console.log("No existe");
        }else{
            console.log(product)
        }
    }

    #generarId(){
        return this.products.length
        ? this.products[this.products.length - 1].id + 1
        : 1 
     }
}

const product1 = new productManager();
const product2 = new productManager();
product1.addProduct("Titulo", "Descripcion", 20, "Thumbnail", 50)
product1.addProduct("Titulo2", "Descripcion2", 22, "Thumbnail2", 52)

product1.getProductById(4)

