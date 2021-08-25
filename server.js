console.log(process.env.NODE_ENV)

const path = require('path');
const express = require('express');
// const bodyParser = require('body-parser');
const productRoutes = require('./routes/products');
const authRoutes = require('./routes/auth');
const connectDB = require('./config/db');

const app = express();

// Connect DB
connectDB();

// Init Middleware
app.use(express.json({ extended: false }));

app.use('/images', express.static(path.join('images')));

app.use((req, res, next) => {
  // Set CORS headers so that the React SPA is able to communicate with this server
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET,POST,PUT,PATCH,DELETE,OPTIONS'
  );
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  next();
});

// Define routes

app.use('/products', productRoutes);
app.use('/', authRoutes);


const PORT = 3100;
app.listen(PORT, () =>{
  console.log(`Server is running at ${PORT}`);
});
