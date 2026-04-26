
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const productRoutes = require('./routes/productRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/api/products', productRoutes);

app.listen(3001, () => console.log('Server running on port 3001'));
