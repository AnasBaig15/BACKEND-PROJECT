const express = require("express");
const router = express.Router();
const isLoggedIn = require("../middlewares/isLoggedIn");
const Product = require("../models/product-model");

router.get("/shop", isLoggedIn, async (req, res) => {
    try {

        const products = await Product.find();

        res.render("shop", { products });
    } catch (err) {
        console.error("Error fetching products:", err);
        req.flash("error", "Failed to load products");
        res.redirect("/");
    }
});

module.exports = router;
