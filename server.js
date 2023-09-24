const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const fs = require('fs');

// Create an express app
const app = express();

// Use the body-parser middleware to parse JSON requests
app.use(bodyParser.json());

// Define a route to handle the download request
app.post('/download', async (req, res) => {
  // Get the media URL from the request body
  const mediaUrl = req.body.mediaUrl;

  // Make a request to the Instagram API to download the media
  const response = await axios.get(mediaUrl);

  // Save the media to the server
  const mediaData = await response.buffer();
  const fileName = mediaUrl.split('/').pop();
  await fs.writeFileSync(fileName, mediaData);

  // Return a JSON response with the download status
  res.json({ status: 'success' });
});

// Start the express server
app.listen(3000, () => {
  console.log('Server is listening on port 3000');
});
