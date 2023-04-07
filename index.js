const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// const categories = require("./data/category.json");
// const products = require("./data/products.json");



app.get("/", (req, res) => {
    res.send("Server Is Ready.");
});

app.listen(port, () => {
    console.log("port is running", port);
});