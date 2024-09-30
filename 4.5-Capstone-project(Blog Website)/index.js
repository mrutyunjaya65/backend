import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"))



app.get("/", (req, res) => {
    res.render("home.ejs")
});

app.get("/about", (req, res) => {
    res.render("about.ejs")
});

app.get("/contact", (req, res) => {
    res.render("contact.ejs")
});

app.get("/post", (req, res) => {
    res.render("post.ejs")
});

app.get("/login", (req, res) => {
    res.render("login.ejs")
});

app.get("/signup", (req, res) => {
    res.render("signup.ejs")
});

app.post("/submitpost", (req,res) => {
    res.render('post.ejs', { successMessage: 'Submitted Successfully!' });
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});
  