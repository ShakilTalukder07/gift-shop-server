const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const categories = require("./data/category.json");
const products = require("./data/products.json");

app.get("/productCategory", (req, res) => {
    res.send(categories);
})

app.get("/category/:id", (req, res) => {
    const id = req.params.id;
    const productsCategory = products.filter((p) => p.category_id === id);
    res.send(productsCategory);
});

app.get("/products", (req, res) => {
    res.send(products);
});

app.get("/products/:id", (req, res) => {
    const id = req.params.id;
    const selectedProduct = products.find( p => p._id === id)
    res.send(selectedProduct)
});

app.get("/", (req, res) => {
    res.send("Server Is Ready.");
});

app.listen(port, () => {
    console.log("port is running", port);
});