const Product = require("../models/product");
const connectDataBase = require("../config/database");

const products = require("../data/products");

// Setting dotenv
require("dotenv").config({ path: "server/.env" });

// Connecting to DB
connectDataBase();

const seedProducts = async () => {
  try {
    await Product.deleteMany();
    console.log("Products are deleted");

    await Product.insertMany(products);
    console.log("All products are added");

    process.exit();
  } catch (err) {
    console.log(err.message);
    process.exit();
  }
};

seedProducts();
