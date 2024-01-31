const express = require('express');
const cors = require('cors');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors({ origin: 'http://localhost:5173', credentials: true }));

app.get('/api/data', async (req, res) => {
    try {
        const result = await axios.get('https://api.tvmaze.com/search/shows?q=all', {
            withCredentials: true,
        });
        res.json(result.data);
    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).send('Internal Server Error');
    }
});

// https://api.tvmaze.com/shows/42312

app.listen(port, () => {
    console.log(`Proxy server listening at http://localhost:${port}`);
});
