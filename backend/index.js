const express = require('express');
const dotenv = require('dotenv').config();
const PORT = process.env.PORT || 3000;
const userRoutes = require('./routes/user_routes');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.use('/api',userRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
}); 