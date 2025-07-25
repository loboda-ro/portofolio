const express = require('express')
const app = express()
const port = 3000
const login = require("./routes/authRoute")
const dotenv = require('dotenv');

dotenv.config();


// routes

app.post('/api/data', (req, res) => {
  const receivedData = req.body.data;
  console.log('Received data:', receivedData);
  login()
  // Process the data
  res.json({ message: `Data received: ${receivedData}` }); //send response back
});






app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})
