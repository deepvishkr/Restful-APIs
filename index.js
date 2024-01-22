const express = require('express');
const mongoose = require('mongoose');

const app = express();
const routes = require("./routes/routes")

const bodyParser = require("body-parser")
app.use(bodyParser.json());
app.use(routes)



const connect = mongoose.connect("mongodb+srv://deepak:vishal@cluster0.spazn9r.mongodb.net/?retryWrites=true&w=majority")
connect.then(() => {
    console.log("mongodb connected")
}).catch((err) => {
    console.log(err.message)

})



const port = 3000;
app.listen(3000, () => {
    console.log('Serving on port 3000')
})