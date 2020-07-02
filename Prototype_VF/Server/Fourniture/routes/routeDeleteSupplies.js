const express = require('express');
const router = express.Router();
const Supply = require('../db/supply');
const SupplyRequest = require('../db/supplyRequest');
const SupplyStock = require('../db/supplyStock');
const Establishment = require('../db/establishment');

//--------------------------------------------------- DELETE ----------------------------------------------------------------------------------

router.delete('/', async (req,res) => { 
    try{
        const supplies=await Supply.findOne({supplyType:req.body.supplyName})
        const supplyRequest=await SupplyRequest.deleteOne({"supplyId":supplies._id},{"establishmentId":req.body.establishmentID} )
        const supplyStock=await SupplyStock.deleteOne({"supplyId":supplies._id},{"establishmentId":req.body.establishmentID} )        
        
        res.json("successfuly deleted");                    
                
        
    }catch(err){
        res.json(err);
    }
});
module.exports = router;