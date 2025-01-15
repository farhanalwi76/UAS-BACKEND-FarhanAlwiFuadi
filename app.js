// import express
const express = require("express");
// import router
const router = require("./routes/api.js");
// membuat object express
const app = express();
// import database
const db = require("./config/database.js");

// Middleware untuk parsing request body
app.use(express.json());  // Memproses JSON
app.use(express.urlencoded({ extended: true })); // Memproses data form URL-encoded

// menggunakan routing (router)
app.use(router);

// mendefinisikan port
app.listen(3000, () => 
    console.log('Server running at http://localhost:3000'));
