const express = require('express');
const app = express();
const ExpressError = require("./ExpressError");

// Random middleware
// app.use((req,res,next)=>{
//     console.log("Hii, I am Middleware!");
//    next();
// })

// app.use((req,res,next)=>{
//     console.log("Hii, I am Middleware 2.O!");
//    next();
// })

//logger
// app.use((req,res,next)=>{
//     req.time = new Date(Date.now()).toString();
//     console.log(req.method , req.hostname, req.path, req.time);
//     next();
// })


// Path Specified middleware
app.get("/random", (req, res, next) => {
    console.log("I'm only for random path");
    next();
})

//Authenticate middleware for Api route method
const checkToken = ("/api", (req, res, next) => {
    let { token } = req.query;
    if (token === "giveaccess") {
        next();
    }throw new ExpressError(401,"Access denied")

})
//API route
app.get("/api",checkToken, (req, res) => {
    res.send("Data, that can be dB data , array or any other data");
})

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

//Error handler middleware
app.use((err,req,res,next)=>{
    let {status=500 , message= "occur error when "} = err;
    res.status(status).send(message);
})


// for  404 error middleware : for invalid route path
app.use((req, res) => {
    res.send("Page not found")
})


app.listen(3000, () => {
    console.log("Server is listen to port 3000")
})