const express = require('express')
const app = express()
const port = 3000
const authRoutes = require("./routes/authRoute")
const uploadRoute = require("./routes/uploadRoute")
const dotenv = require('dotenv');
const path = require('path');

dotenv.config({ path: path.join(__dirname, '.env') });

// CORS middleware
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:5173'); // Vite dev server default port
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  if (req.method === 'OPTIONS') {
    res.sendStatus(200);
  } else {
    next();
  }
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes
app.use('/api/auth', authRoutes);
app.use("/api/upload", uploadRoute);


app.post('/api/data', (req, res) => {
  const receivedData = req.body.data;
  console.log('Received data:', receivedData);
  // Process the data
  res.json({ message: `Data received: ${receivedData}` }); //send response back
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Express listening on port ${port}`)
})
