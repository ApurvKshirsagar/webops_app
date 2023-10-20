const express = require('express');
const axios = require('axios');
const app = express();
const port = process.env.PORT || 3500;

// Define a route that returns a random inspirational quote
app.get('/get-quote', async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    const quote = response.data[0];
    // console.log(quote);
    res.json({ quote: quote.q });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch a quote' });
  }
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
