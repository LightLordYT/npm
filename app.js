const express = require('express');
const mysql = require('mysql');

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12",
    database: "nodemysql"
});

db.connect((err) => {
    if(err){
        console.log(err)
    }
    console.log('mysql connected')
});

const app = express();

app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE nodemysql";
    db.query(sql, (err, result) => {
        if(err) console.log(err);
        console.log(result)
        res.send('db created')
    });
});

app.get("/create", (req, res) => {
    let sql = "CREATE TABLE posts(id int AUTO_INCREMENT, title VARCHAR(255), body VARCHAR(255), PRIMARY KEY(id)"
    db.query(sql, (err, result) => {
        if(err) console.log(err)
        console.log(result);
        res.send("Posts table created")
    });
});

app.get("/addpost1", (req, res) => {
    let post = {
        title: "post1",
        body: "this is post one"
    }
    let sql = "INSERT INTO posts SET ?"
    let query = db.query(sql, post, (err, result) => {
        if(err) console.log(err)
        console.log(result)
        res.send("post 1 added")
    })
});

app.get("/addpost2", (req, res) => {
    let post = {
        title: "post2",
        body: "this is post two"
    }
    let sql = "INSERT INTO posts SET ?"
    let query = db.query(sql, post, (err, result) => {
        if(err) console.log(err)
        console.log(result)
        res.send("post 2 added")
    })
});

app.get("/getposts", (req, res) => {
    let sql = "SELECT * FROM posts"
    let query = db.query(sql, (err, results) => {
        if(err) console.log(err)
        console.log(results)
        res.send("post fetched")
    })
});



const PORT = process.env.PORT || 3000
app.listen(PORT, () => {
    console.log("server started on port 3000")
})