const express = require("express");
const app = express();


app.get("/",(req,res) => {
    return res.json({message:"go to /quotes"});
});


app.listen(3000, () => {
    console.log("go to http://localhost:3000");
});
