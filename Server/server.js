const express = require('express')
const mongoose = require('mongoose') 
var app = express()
var Data = require('./noteSchema')

mongoose.connect('mongodb://localhost/newDB')

mongoose.connection.once("open", () => {
    console.log("Connected to DB!")
}).on("error", (error) => {
    console.log("Failed to connect " + error)
})

// CREATE A NOTE
// POST request
app.post("/create", (req, res) => {
    var note = new Data ({
        note: req.get("note"),
        title: req.get("title"),
        date: req.get("date"),
    }) 

    note.save().then(() => {
        if (note.isNew == false) {
            console.log("Saved data!")
            res.send("Saved data!")
        } else {
            console.log("Failed to save data!")
        }
    })
})

// http://192.168.43.81:8081/create
var server = app.listen(8081, "192.168.43.81", () => {
    console.log("Server is running!")
})

// DELETE A NOTE
// POST request

// UPDATE A NOTE
// POST request

// FETCH ALL NOTES
// GET request




