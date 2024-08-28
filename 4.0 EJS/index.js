import express from "express"

const app = express();
const port = 3000;

const today = new Date();
let day = today.getDay()  //returns days in a week from 0 to 6(i.e. saunday to saturday)

app.get("/", (req,res) => {
    let first = "a weekday";
    let second = "it's time to work hard";

    if(day === 0 || day === 6){
        first = "the weekend";
        second = "it's time to have some fun";
    }

    res.render ("index.ejs",{
        Daytype: first,
        Advice: second,
    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}.`);
});