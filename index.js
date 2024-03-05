const express = require('express');
const axios = require ('axios');
const http = require ('http');
const app = express ();
const PORT = process.env.PORT || 3000;

app.set ('view engine', 'ejs');

app.get ('/', async (req, res) => {
    try {
        const response = await  axios.get('api/');
        const liveScores = response.data();
        res.render('index', {liveScores});
    
    } catch (error) {
        console.error('Error fetching live scores:', error);
        res.status(500).send('Error fetching live scores')
        
    };
});

app.listen( PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});