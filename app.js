require('dotenv').config();
const express = require('express');
const InitiateMongoServer = require('./config/db');
const profileRoutes = require('./routes/profileRoutes')

InitiateMongoServer();

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/v1/api/profile', profileRoutes)

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));