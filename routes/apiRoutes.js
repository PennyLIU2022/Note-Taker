const path = require('path');
const fs = require('fs');
const app = require('express').Router();

// npm packages to create uniqid id
var uniqid = require('uniqid');


// read the db.json file and return all saved notes as JSON
app.get('/api/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../db/db.json'));
});

// POST: to receive a new note to save on the request body. Add the note to db.json, and then return it to the client.
app.post('/api/notes', (req, res) => {
    let db=fs.readFileSync('db/db.json');
    db = JSON.parse(db);
    res.json(db);

    // create a body for the note
    let userNote = {
        title: req.body.title,
        text: req.body.text,
        id: uniqid(),
    };

    // push the created note to be written in db.json
    db.push(userNote);
    fs.writeFileSync('db/db.json', JSON.stringify(db));
    res.json(db);
});

// DELETE: to receive a query parameter containing the id of a note to delete
app.delete('/api/notes/:id', (req, res) => {
    let db=JSON.parse(fs.readFileSync('db/db.json'));
    let deleteNotes = db.filter(item => item.id !== req.params.id);
    fs.writeFileSync('db/db.json', JSON.stringify(deleteNotes));
    res.json(deleteNotes);
});

module.exports=app;