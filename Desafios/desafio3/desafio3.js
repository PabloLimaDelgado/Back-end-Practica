import express from "express";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

import { ProductManager } from "../desafio2";

app.get('/products', async (req, res) => {
    try {
        let products = await ProductManager.getProducts();
        if (req.query.limit && !isNaN(Number(req.query.limit))) {
            const limit = Number(req.query.limit);
            products = products.slice(0, limit);
        }
        res.json({ data: products });
    } catch (error) {
        res.status(500).json({ error: "Error al obtener los productos" });
    }
});

app.get('/products/:pid', async (req, res) => {
    try {
        const pid = Number(req.params.pid);
        const product = await ProductManager.getProductById(pid);
        
        if (product === 'No product') {
            res.status(404).json({ error: "Producto no encontrado" });
        } else {
            res.json({ data: product });
        }
    } catch (error) {
        res.status(500).json({ error: "Error al obtener el producto" });
    }
});

app.listen(8080, () => {
  });