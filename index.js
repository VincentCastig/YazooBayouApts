// import Axios from 'axios';
const dotenv = require('dotenv').config();
const express = require('express');
const { json } = require('body-parser');
const cors = require('cors');
const path = require('path');
const port = 3000


const app = module.exports = express();
app.use(json());
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));


// app.use(passport.initialize());
// app.use(passport.session());
// app.use(express.static('./public'));


app.listen(process.env.PORT, () => { console.log(`Listening on port: 3000`)});