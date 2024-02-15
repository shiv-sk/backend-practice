const app = require('./index');
const dotenv = require('dotenv');
dotenv.config({path:'./.env'})

const databasecon = require('./db/connection');



// app.listen(process.env.PORT , (err) =>{
//     if(!err){
//         console.log('app is listening on port 4000');
//     }
//     else{
//         throw err
//     }
// })

databasecon().then(
    ()=>{
        app.listen(process.env.PORT || 3000 , (err) =>{
           
            console.log('server is listening on' , process.env.PORT);
            app.on('error: ' ,(err)=>{
                console.log('error:' , err)
                next(err);
            })
        })
    }
   
).catch((err) =>{
    console.log('something went wrong! fix it ',err );
    
})

