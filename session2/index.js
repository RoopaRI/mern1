const express = require('express');
const app = express();
const currencies = require('./currencies.json');
const PORT = 8082;

app.get('/', (req, res) => {
    res.send(`<h1>Hello</h1>`);
});

app.get('/currencies', (req, res) => {
    const {min_value} = req.query;

    if(min_value){
        const result = currencies.data.filter((item) => item.min_size === min_value)
        res.json(result);
    }
    res.json(currencies);
});

app.get('/currencies/:symbol', (req, res) => {
    const { symbol } = req.params;

    const filtered = currencies.data.find((curr) => curr.id === symbol.toUpperCase());
    
    if (filtered) {
        res.json(filtered);
    } else {
        res.status(404).json({ error: 'Currency not found' });
    }
});

app.listen(PORT, () => {
    console.log('Listening at', PORT);
});
