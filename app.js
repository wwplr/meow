const express = require('express');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Welcome API endpoint
app.get('/api', (req, res) => {
    res.status(200).json({
        message: 'Welcome to the API'
    });
});

// Other API routes
app.use('/api', require('./router'));

app.all('*', (req, res) => {
    res.status(404).json({
        status: false,
        message: 'Invalid Endpoint'
    });
});

module.exports = app;





