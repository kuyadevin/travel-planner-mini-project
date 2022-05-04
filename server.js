// dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");

// setup for express
const app = express();
const PORT = process.env.PORT || 3001;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/travellers", (req, res) => {

});
app.post("/api/travellers", (req, res) => {

});
app.delete("/api/travellers/:id", (req, res) => {

});
app.get("/api/locations", (req, res) => {

});
app.post("/api/locations", (req, res) => {

});
app.delete("/api/locations/:id", (req, res) => {

});
app.post("/api/trips", (req, res) => {

});
app.delete("/api/trips/:id", (req, res) => {

});

// listens for the server
app.listen(PORT, () => {
    console.log("Listening on PORT ", PORT);
});