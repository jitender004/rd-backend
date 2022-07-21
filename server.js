const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv").config();
const port = process.env.PORT || 5000;
const connectDB = require('./src/config/db');
const productController = require('./src/controller/products.controller')

const app = express();

// Connect Database
connectDB();


app.use(cors());
app.use(express.json());

app.use("/api/products",productController)

app.get('/', (req, res) => res.send('Hello world!'));

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
