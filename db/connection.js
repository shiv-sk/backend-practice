const mongoose = require('mongoose');

const DB = async () =>{
    try{
       const connection =  await mongoose.connect(process.env.DATABASE);
        console.log('finally database is connected successfully');
        console.log('connection types: ' , connection)
        
    }catch(err){
        console.log('there is an error is connection! ' , err);
        // console.log('connection types: ' , connection)
        process.exit(1);
    }
}

module.exports = DB