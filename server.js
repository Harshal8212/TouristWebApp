const express = require("express");
const mongoose = require("mongoose");
const Article = require("./models/article");
const articlepaths = require("./paths/routes")


var app = express();

mongoose.connect('mongodb://localhost/places');


app.use(express.urlencoded({extended:false}));
app.set('view engine', 'ejs');
app.use(express.static('public'));


app.get('/all', async (req, res)=>{
    let articles = await Article.find().sort({createdAt :"desc"});
    
    res.render('articles/newshow', {    articles : articles});
})



app.get("/", async (req, res)=>{
    let articles = await Article.find().sort({createdAt :"desc"});
    
    res.render('articles/index', {articles:articles});
    
})


app.post('/',  (req, res)=>{
    
})

app.use('/articles', articlepaths);


app.listen(3000, ()=>{  
    console.log("Server started at 3000");
})