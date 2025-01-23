const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/e-commerce')
.then(function(){
    console.log("connect");
})
.catch(function(err){
  console.log(err);
})

module.exports = mongoose.connection;