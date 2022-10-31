const express = require('express');

const mysql = require('mysql2');
const PORT = 3001;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'movie_db'
})

app.listen(PORT, () => {
    console.log('server running on port localhost:3001');
}) 