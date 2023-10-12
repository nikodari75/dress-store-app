


const express = require("express")
const router = express.Router()
const Product = require("../../models/Product")



// READ All
router.get("/", async (request, response) => {
    try {
        const allProducts = await Product.find()
        return response.json(allProducts)

    } catch (error) {
        return response.status(400).json(error.message)
    }
})


// READ By (ID)
router.get("/:id", async (request, response) => {
    const id = request.params.id

    try {
        const product = await Product.findById(id)
        return response.json(product)
    } catch (error) {
        return response.status(400).json(error.message)
    }

})


// CREATE 
router.post("/", async (request, response) => {
    try {
        const data = request.body
        const newProduct = await Product.create(data)
        return response.json(newProduct)
    } catch (error) {
        return response.status(400).json(error.message)
    }

})


// UPDATE By (ID)
router.put("/:id", async (request, response) => {
    const id = await request.params.id
    try {
        const data = request.body
        const updatedProduct = await Product.findByIdAndUpdate(
            id,
            data,
            { new: true }
        )
        response.json(updatedProduct)
    }
    catch (error) {
        return response.status(500).json(error.message)
    }
})


// DELETE By (ID)
router.delete("/:id", async (request, response) => {
    const id = await request.params.id
    try {
        const deletedProduct = await Product.findByIdAndDelete(id)
        return response.json(deletedProduct)
    }
    catch (error) {
        return response.status(400).json(error.message)
    }
})



module.exports = router