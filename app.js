// import express
const express = require("express");
// import router
const router = require("./routes/api.js");
// membuat object express
const app = express();
// import database
const db = require("./config/database.js");

// menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(3000, () => 
    console.log('Server running at http://localhost:3000'));