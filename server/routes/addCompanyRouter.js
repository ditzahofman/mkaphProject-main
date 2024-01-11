const express=require('express')
const router=express.Router()
const Companies=require('../services/companies')

router.post('/',async function(req,res,next){
    try{
        res.send(await Companies.postCompanies(req));
        return;
    }
    catch(err){
        console.error('error while upadate donations', err.message);
        next(err)
    }
    res.sendStatus(400)

})

module.exports = router;