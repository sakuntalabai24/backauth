const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

require("dotenv").config();

const route = require("./route/routes");

const mongoString = process.env.DATABASE_URL;
console.log('Mongo url :',mongoString);


const app = express();
app.use(express.json());
app.use(cors());

let PORT = 9000;
console.log("post 9000 = ",PORT);

app.listen(PORT,() => {
    console.log(`Server Started at Port${ PORT}`);
});

mongoose.connect(mongoString);
const database = mongoose.connection;

database.on("error",(error) => {
    console.log(error);

});

database.once("connected",() => {
    console.log("Database connected to the server.");

});

app.use("/",route)