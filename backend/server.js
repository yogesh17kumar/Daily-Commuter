// index.js or server.js
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
app.use(cors());
app.use(express.json());

// DB connect
mongoose.connect('mongodb://127.0.0.1:27017/commute-portal', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => console.log("MongoDB Connected"))
  .catch(err => console.error("MongoDB Error:", err));

// ✅ Import route files
const routeRoutes = require('./routes/route');
const authRoutes = require('./routes/auth'); // ✅ add this line

// ✅ Use routes
app.use('/api', routeRoutes);
app.use('/api', authRoutes); // ✅ this enables /api/login and /api/register

app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
