const express = require('express') ;


const app = express() ;

app.use(express.json()) ;

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
app.get('/numbers' , (req , res)=>{
    let nums  =  '' ;
    for(let i = 0 ; i<= 100 ; i++){
        nums+= i + '_' ;
    }
    res.send(`numbers is ${nums}`)
})

app.get('/about' , (req , res)=>{
    res.send('about page')
})

app.get('/findsummation/:num1/:num2' , (req , res)=>{
    const summe =parseInt(req.params.num1) + parseInt(req.params.num2 );
    res.send(`the summation of ${req.params.num1} + ${req.params.num2} is : ${summe}`);
})
app.get('/sayhi' , (req , res)=>{
    const name = req.body.name ;
    const lastname = req.body.lastname ;
    const age = req.query.age ;
    const gender = req.query.gender ;
    const job = req.query.job ;
    res.json({
        "name":name,
        "lastname":lastname , 
        "age":age ,
        "gender":gender ,
        "job":job
    })
})

app.post('/test' , (req , res)=>{
    res.send('hello world from test')
})
app.post('/comment' , (req , res)=>{
    res.send('comment aded')
})
app.delete('/testinfDelete' , function(req , res){
    res.send('item deleted')
})









app.listen(8080 , ()=>{
    console.log('server listen to port 8080')
});

