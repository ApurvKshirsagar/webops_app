// Import required libraries and modules
const express = require('express'); // Import the Express.js library
const axios = require('axios'); // Import the Axios library for making HTTP requests
const app = express(); // Create an Express application
const port = process.env.PORT || 3500; // Set the port for the server to either the environment variable PORT or 3500 if not specified

// Define a route that returns a random inspirational quote
app.get('/get-quote', async (req, res) => {
  try {
    // Make an asynchronous HTTP GET request to the ZenQuotes API
    const response = await axios.get('https://zenquotes.io/api/random');
    const quote = response.data[0]; // Extract the first quote from the API response
    // console.log(quote); // Uncomment this line to print the quote to the server's console for debugging
    res.json({ quote: quote.q }); // Send the quote as JSON in the response
  } catch (error) {
    // Handle errors by sending a 500 Internal Server Error response with an error message
    res.status(500).json({ error: 'Failed to fetch a quote' });
  }
});

// Start the Express server and listen on the specified port
app.listen(port, () => {
  console.log(`Server is running on port ${port}`); // Print a message to the server's console when it starts
});
