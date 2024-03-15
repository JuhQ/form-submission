// express.js server which will get POST method data in url /form-submission
// result will be a json representation of anything sent from a html form
const express = require('express');
const app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to parse urlencoded bodies
app.use(express.urlencoded({ extended: true }));

app.post('/form-submission', (req, res) => {
    // Access the form data from req.body
    const formData = req.body;

    // Send the JSON response
    res.json(formData);
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});