import express from "express";
import connectDB from "./db/connectDB.js";
import dotenv from "dotenv";

const app = express();
dotenv.config();


app.get('/', (req, res) => {
    res.send("backend is running");
});


const PORT = 5000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log("server is running");
    })
});
// app.listen(PORT, ()=>{
//     console.log("server is running");
// })