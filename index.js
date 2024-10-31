const express = require('express') ;
const mongoose = require('mongoose') ;
const article = require('./models/Article') ;


const app = express() ;
app.use(express.json()) ;

// connect to databases
const username = encodeURIComponent("olaminehicham");
const password = encodeURIComponent("@@@$$$###h2002");
const dbUrl= `mongodb+srv://${username}:${password}@cluster0.clryy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` ;

mongoose.connect(dbUrl)
.then(()=>{
  console.log('db conected successfoly !')
}).catch((err)=>{
  console.log(`db conection feild with error : ${err}`)
})

// start the applications end points

app.get('/' , function(req , res){
    const productes = [
        {
            id:1 ,
            name:'pc',
            price:490
        },
        {
            id:2,
            name:'phone',
            price:400
        },
        {
            id:3 ,
            name:'ipade',
            price:4500
        },
    ]
    res.render('welcome.ejs' ,{
        productes:productes
    });
})
// articles end points 
app.get('/articles' , async(req ,res)=>{
    const articles = await article.find().exec() ;
    res.json(articles)
})

app.get('/articles/:id' , async(req , res)=>{
    const theArticle = await article.find({"_id":req.params.id}).exec() ;
    res.json(theArticle) ;

})
app.post('/articles' ,async (req , res)=>{
    const newArticle = new article({
        title:req.body.title ,
        body:req.body.body , 
        shareDate:req.shareDate ,
        numOfLikes:req.numOfLikes
    })
    await newArticle.save() ;
    res.send('article stored successfoly!')
})
app.delete('/articles/:id' , async(req , res)=>{
    await article.deleteOne({_id:req.params.id}) ;
    res.send( `article with id : ${req.params.id} was deleted suuccesfoly !`) 
})

app.put('/articles/:id' ,async (req , res)=>{
    await article.updateOne({"_id":req.params.id} , {"title":"thi is new title "}) ;
    res.send( 'article updated successfoly !')
})

app.get("/showArticles" , async(req , res)=>{
    try{
        const articles = await article.find().exec() ;
        res.render('articles.ejs' , {articles:articles}) ;
    }catch(err){
        res.json(err)
    }
})









app.listen(8080 , ()=>{
    console.log('server listen to port 8080')
});

