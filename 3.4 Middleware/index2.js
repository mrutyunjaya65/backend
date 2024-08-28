//Morgan middleware

import express from "express";
import morgan from "morgan";

const app = express();
const port = 3000;

//morgan  middleware plugin
app.use(morgan("tiny"))  //"tiny" is a predefined, minimal logging format.  It logs minimal information: (the HTTP method, URL, response status code, and response time)

app.get("/", (req, res) => {
  res.send("Hello");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
