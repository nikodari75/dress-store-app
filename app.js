
const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")


const port = 3001
const app = express()
app.use(express.json())
app.use(cors())



const dbUserName = "nikodari"
const dbPassword = "GCf6SoR0gRS5Uwuk"

const dbString = `mongodb+srv://${dbUserName}:${dbPassword}@dressstore.ipjhfjz.mongodb.net/?retryWrites=true&w=majority`

mongoose.connect(dbString)
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