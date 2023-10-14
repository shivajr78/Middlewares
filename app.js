//For Error Error handling


const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");


//Authenticate middleware for Api route method
// const checkToken = ("/api", (req, res, next) => {
//     let { token } = req.query;
//     if (token === "giveaccess") {
//         next();
//     }throw new ExpressError(401,"Access denied")

// })

//API route
// app.get("/api",checkToken, (req, res) => {
//     res.send("Data, that can be dB data , array or any other data");
// })

// Error Router
app.get("/err",(req,res)=>{
    abcd = abcd;
})


app.get("/", (req, res) => {
    res.send("Hii, I am Root!");
})
app.get("/random", (req, res) => {
    res.send("This is a random page")
})


// Activity : create an admin route & send with a 403 status code : 
app.get("/admin",(req,res)=>{
    throw new ExpressError(403,"Access to admin is forbidden")
})

// Error handler middleware
app.use((err,req,res,next)=>{
    let {status=500 , message= "occur error when "} = err;
    res.status(status).send(message);
})


app.listen(3000, () => {
    console.log("Server is listen to port 3000")
})