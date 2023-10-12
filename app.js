
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const port = 3001
const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/DressStore")
    .then(result => {
        console.log("Connection Success ! ")
    })
    .catch(error => {
        console.log(error)
    })




// Welcome Message 
app.get("/", (request, response) => {
    return response.json({
        message: "Welcome t DressStore application."
    })
})


// Products Routes
const productsRouter = require("./routes/api/productsRouter")
app.use("/api/products", productsRouter)




app.listen(port, () => {
    console.log(`Server Running On => http://localhost:${port}`)
})