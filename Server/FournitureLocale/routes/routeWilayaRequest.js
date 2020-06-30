const express = require('express');

const router=express.Router();
const wilaya = require('../db/wilaya');
const establishment = require('../db/establishment')
const supplyRequest= require('../db/supplyRequest')

//un representant d'une wilaya peut voir  fournitures menquantes au niveau des etablissments de sa wilaya 
router.get('/Request/:wilaya/:establishment', async (req, res) => {
    try {
        const Wilaya= await wilaya.findOne({"wilayaName":req.params.wilaya})
        const Establishment = await establishment.findOne({"establishmentName":req.params.establishment,"establishmentWilaya":Wilaya._id})
        const SupplyRequests = await  supplyRequest.aggregate([{"$match" : {"establishmentId":Establishment._id}}, 
        { "$lookup" : {                 //recuperer les demandes de fournitures de l'etablissment séléctionné 
           "from" : "supplies",
           "localField" : "supplyId",
           "foreignField":"_id",
           "as":"supplyinfo"
         }},
         {"$unwind":"$supplyinfo"},
         { "$project" : {
             "suppliesNumber":1,
             "supplyinfo.supplyType":1,
             
         } }
         ])
          res.json(SupplyRequests)
     }
     catch (error) {
           console.log(error);
     }  
        
     });
     

module.exports= router;
