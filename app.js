// Requiring module
const express = require('express');
const path = require('path');
// Creating express object
const app = express();


const PORT = 3000;

app.use(express.static('bostami'));

// Handling GET request
app.get('/', (req, res) => { 
    res.sendFile(path.join(__dirname, 'bostami', 'index.html')) 
    
}); 

// Port Number

// Server Setup
app.listen(PORT,console.log(
  `Server started on port ${PORT}`));
