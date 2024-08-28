import express from "express";

const app = express();
const port = 3000;

//custom middleware
function logger(req, res, next){
    console.log("hyy");
    console.log("url: "+ req.url)
    console.log("method: "+ req.method)
    next();
}
app.use(logger);

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
