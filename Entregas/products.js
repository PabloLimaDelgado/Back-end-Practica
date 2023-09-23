import fs from "fs";

class productManager {
  constructor(path) {
    this.path = path;
  }

  async createProduct(obj) {
    try {
      const products = await this.getProducts({});
      let id;
      if (!products.length) {
        id = 1;
      } else {
        id = products[products.length - 1].id + 1;
      }
      const newProduct = { id, ...obj };
      products.push(newProduct);
      await fs.promises.writeFile(this.path, JSON.stringify(products));
      return newProduct;
    } catch (error) {
      return error;
    }
  }

  async getProducts() {
    try {
      if (fs.existsSync(this.path)) {
        const info = await fs.promises.readFile(this.path, "utf-8");
        return JSON.parse(info);
      } else {
        return [];
      }
    } catch (error) {
      return error;
    }
  }

  async getProductById(idProduct) {
    try {
      const products = await this.getProducts();
      const product = products.find((u) => u.id === idProduct);
      return product !== undefined ? product : null; // Devuelve null en lugar de objeto vacío
    } catch (error) {
      return error;
    }
  }

  async deleteProduct(idProduct) {
    try {
      const products = await this.getProducts();
      const product = products.find((u) => u.id === idProduct);

      if (!product) {
        return -1;
      }
      const newArrayProducts = products.filter((u) => u.id !== idProduct);
      await fs.promises.writeFile(this.path, JSON.stringify(newArrayProducts));
      return 1;
    } catch (error) {
      return error;
    }
  }

  async updateProduct(idProduct, obj) {
    try {
      const products = await this.getProducts();
      const productIndex = products.findIndex((u) => u.id == idProduct);
      if (productIndex === -1) {
        return -1;
      }

      const product = products[productIndex];
      products[productIndex] = { ...product, ...obj };
      await fs.promises.writeFile(this.path, JSON.stringify(products));
      return product;
    } catch (error) {
      return error;
    }
  }
}

export const ProductManager = new productManager("ManagerAPI.json");
