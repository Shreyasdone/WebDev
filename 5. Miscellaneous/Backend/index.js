const express = require('express');
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.listen(port, ()=>{
    console.log("listening on port",port);
})

app.get('/register',(req,res)=>{
    console.log(req.params.length);
    let {username, password} = req.query;
    res.send(`Standard GET request. Welcome ${username}`);
})

app.post('/register',(req,res)=>{
    let {username, password} = req.body;
    console.log(username,password,req.body);
    // res.send('Standard POST request. Welcome',username);
    res.send(`Standard POST request. Welcome ${username}!`);
})