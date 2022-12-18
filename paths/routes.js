const express = require("express");
const Article = require("./../models/article");
const router = express.Router();



router.get('/new', function(req, res){
    res.render("articles/new", {article:new Article()})
})

router.get('/:id', async (req, res)=>{
    const article = await Article.findById(req.params.id);
    if(article == null) req.redirect('/');
    res.render('articles/show', {article: article})
})

router.get("/map/:id", async (req, res)=>{
    
    let article = await Article.findById(req.params.id);
    if(article == null) req.redirect('/')
    res.render('articles/map', {article : article});
 
})
router.post('/', async (req, res)=>{
    let article = new Article({
        title:req.body.title,
        description: req.body.description,
        markdown: req.body.markdown,
    })
    try{
        article = await article.save();
       
        res.redirect(`/articles/${article.id}`)
    }catch(e){
        res.render('article/new', {article: article});
    }

    
})

module.exports = router;