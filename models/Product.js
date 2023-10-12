const mongoose = require("mongoose")

const productSchema = mongoose.Schema({
    name: String,
    description: String,
    price: Number,
    published: Boolean,
    category: String,
})


module.exports = mongoose.model("Product", productSchema)