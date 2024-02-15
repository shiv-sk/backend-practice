const testingApi = (req,res) =>{
    try { 
        res.status(200).json({
        status:'success',
        message:'all-ok..'
    })
}catch(err){
    console.log(err);
}
   
}

module.exports = testingApi