// connect local db 

  // const mongoose = require('mongoose');

  // const dbUrl = 'mongodb://localhost:27017/expressproject';

  // let db = mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true })
  //   .then(() => console.log('Connected to MongoDB'))
  //   .catch((error) => console.error('MongoDB connection error:', error));

// connect atlas db
const mongoose = require('mongoose') ;

const article = require('./models/Article') ;

const username = encodeURIComponent("olaminehicham");
const password = encodeURIComponent("@@@$$$###h2002");
const dbUrl= `mongodb+srv://${username}:${password}@cluster0.clryy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0` ;

mongoose.connect(dbUrl)
.then(()=>{
  console.log('db conected successfoly !')
}).catch((err)=>{
  console.log(`db conection feild with error : ${err}`)
})

