const path = require('path');
const app = require('express').Router();

// get notes and return the notes.html
app.get('/notes', (req, res)=>{
    res.sendFile(path.join(__dirname, '../public/notes.html'));
});

// get all and return to index.html
  app.get('*',(req, res)=>{
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports=app;

