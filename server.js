// dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// setup for express
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());









// listens for the server
app.listen(PORT, () => {
    console.log("Listening on PORT ", PORT);
});