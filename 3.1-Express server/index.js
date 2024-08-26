import express from "express";
const app = express();
const port = 3000;

app.length("/" , (req, res) => {
    res.send("Hello World!")
})

app.listen(port, ()=> {
    console.log(`Server running on port ${port}.`)  //here 3000 is port and secnd is callback function 
})