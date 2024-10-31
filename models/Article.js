const mongoose = require('mongoose') ;
const { Schema } = mongoose;

const articleSchema = new Schema({
    title:String , 
    body:String ,
    shareDate:Date ,
    numOfLikes:Number

})

const article = mongoose.model('article' , articleSchema) ;

// const article1 = new article({title:'covide 19' , body:'is a verus comman in 2020 ...' , shareDate:'2020-02-02' , numOfLikes:478}) ;
// await article1.save() ;
// // or 
// await article.create({title:'covide 19' , body:'is a verus comman in 2020 ...' , shareDate:'2020-02-02' , numOfLikes:478}) ;

module.exports = article ;