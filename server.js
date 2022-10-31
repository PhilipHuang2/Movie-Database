const express = require('express');

const mysql = require('mysql2');
const PORT = 3001;

const app = express();
app.use(express.urlencoded({extended: false}));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'MehmetMusabeyoglu1.',
    database: 'movie_db'
});

app.post('/api/add-movie', (req,res) => {
    req.body.name 
    db.query(`INSERT INTO movies(movie_name)
    VALUES(?)`,req.body.name, (err,result) => {
        console.log(result);
    });
    res.send('Posted');
});
app.get('/api/movies', (req,res) => {
    db.query(`SELECT movie_name from movies`,(err,result) => {
        let newList = result.map((element)=> element.movie_name)
        res.send(newList);
    });
});
app.delete('/api/movie/:id', (req, res) => {
    db.query(`DELETE FROM movies WHERE id = ?`, req.params.id, (err, result) => {
        console.log(result);
        res.send('deteled movie');
    })
});

app.get('/api/movie-reviews', (req, res) => {
    db.query(`SELECT review FROM reviews`, (err, result) => {
        let newList = result.map((element)=> element.review)
        res.send(newList);
    })
});
app.put('/api/review/:id', (req,res) => {
    db.query(`UPDATE reviews SET review = ? WHERE id= ? `, [req.body.review, req.params.id], (err,result) => {
        // console.log(result);
        res.send("Put request complete");
    });
});



app.listen(PORT, () => {
    console.log('server running on port localhost:3001');
});