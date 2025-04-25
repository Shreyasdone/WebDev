const express = require("express");
const figlet = require("figlet")
const app = express();

// console.dir(app); 

let port = 3000;
app.listen(port,()=>{
    console.log(`app listening on port ${port}`);    
})

/*
app.use((req,res)=>{
    console.log("request received");
    // res.send({
    //     name: "Shreyas",
    //     surname: "Done",
    //     age: 19
    // });
    // res.send(code)
    let code;
    figlet("Shreyas",(err,data) => {
        if(err) {
            console.log("Something went wrong");
            console.dir(err);
            return;
        }
        let figText = `<pre>${data}</pre>`;
        // code += figText;
        code = `<h1>Fruits</h1> <ul><li>Mango</li><li>Kiwi</li></ul> ${figText}`;
        // console.log(data);        
        res.send(code);
    })
})
*/
app.get("/",(req,res) => {
    res.send(`<h1>Request received for root</h1>`);
})
/*
app.get("/shreyas",(req,res) => {
    res.send(`<h1>Request received for route shreyas</h1>`);
})

app.get("/arya",(req,res) => {
    res.send(`<h1>Request received for route arya</h1>`);
})

app.get("*",(req,res) => {
    res.send(`<h1>404 Page Not Found</h1>`);
})

app.post("/",(req,res)=>{
    res.send(`<h1>POST for root</h1>`);
})
app.get("/:username/",(req,res)=>{
    let {username, id} = req.params;
    res.send(`<h1>Welcome to the page of @${username}</h1>`);
})
*/

app.get("/search",(req,res)=>{
    console.log(req.query);    
    let {q} = req.query;
    if(!q) 
        res.send("<h1>Nothing searched</h1>");
    res.send(`<h1>${q} is searched</h1>`);
})