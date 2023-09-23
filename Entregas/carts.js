import fs from "fs";

class cartManager {
  constructor(path) {
    this.path = path;
  }

  async createCart(obj) {
    try {
      const carts = await this.getCarts({});
      let id;
      if (!carts.length) {
        id = 1;
      } else {
        id = carts[carts.length - 1].id + 1;
      }
      const newCart = { id, ...obj };
      carts.push(newCart);
      await fs.promises.writeFile(this.path, JSON.stringify(carts));
      return newCart;
    } catch (error) {
      return error;
    }
  }

  async getCarts() {
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

  async getCartById(idCart) {
    try {
      const carts = await this.getCarts();
      const cart = carts.find((u) => u.id === idCart);
      return cart !== undefined ? cart : null; // Devuelve null en lugar de objeto vacío
    } catch (error) {
      return error;
    }
  }

  async addProductToCart(idCart, idProduct) {
    try {
      const carts = await this.getCarts();
      const cart = carts.find((cart) => cart.id === idCart);

      if (!cart) {
        return -1;
      }

      if (!cart.products) {
        cart.products = [];
      }

      const productInCart = cart.products.find(
        (p) => p.productId === idProduct
      );

      // Si el producto ya existe en el carrito, incrementa la cantidad.
      if (productInCart) {
        productInCart.quantity += 1;
      } else {
        // Si no, añade el producto al carrito con cantidad 1.
        cart.products.push({ productId: idProduct, quantity: 1 });
      }

      await fs.promises.writeFile(this.path, JSON.stringify(carts));
      return cart;
    } catch (error) {
      return error;
    }
  }
}

export const CartManager = new cartManager("ManagerCART.json");
