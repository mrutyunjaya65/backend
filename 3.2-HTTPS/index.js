import express from "express";
const app = express();
const port = 3000;

app.get("/", (req,res) => {  //here "/" is the endpoint to access home
    res.send("Hello World!")
})

app.get("/about", (req,res) => {  //here "/about" is the point to access about
    res.send("<h1> About Me </h1>")
})

app.get("/contact", (req,res) => {  
    res.send("Contact me")
})

app.listen(port, ()=> {
    console.log(`server started on port ${port}`)
})
