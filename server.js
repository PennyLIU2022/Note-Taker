const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


// express app to handle data arser and middlewear
app.use(express.urlencoded({ extended: true}));
app.use(express.json());
// use express to create a route for every file in the 'public' folder and give it a '/' route
app.use(express.static('public'));

// routes to routes file
// require('./routes/apiRoutes')(app);
// require('./routes/htmlRoutes')(app);
app.use(require('./routes/apiRoutes'));
app.use(require('./routes/htmlRoutes'));

// listener: starts the server
app.listen(PORT, ()=>{
    console.log(`Server available at localhost ${PORT}`);
})