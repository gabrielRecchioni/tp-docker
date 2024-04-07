const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRoutes = require('./routes/routes');
const app = express();
const port = 8080;

app.use(cors());
app.use(express.json());
app.use('/api', bookRoutes);
mongoose
    .connect('mongodb://mongo:27017/appdb', {})
    .then(() => {
        app.listen(port, () => console.log('Server listen on port', port));
    })
    .catch((e) => console.error(e.message));