const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("./public"));

require("./routes/apiRoutes.js")(app);
require("./routes/htmlRoutes.js")(app,path);


app.listen(PORT, function(){
    console.log("App is running on port" + PORT);
})