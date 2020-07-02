const express = require('express');

const router=express.Router();
const wilaya = require('../db/wilaya');
const establishment = require('../db/establishment');
const supplyRequest= require('../db/supplyRequest');



//un representant ministere peut voir les fournitures menquantes au niveau d'une wilaya selectionnée 
router.get('/Request/:wilaya', async (req, res) => {
   try {
        const Wilaya= await wilaya.findOne({"wilayaName":req.params.wilaya}) //recuperer l'object wilaya dont le nom correspond a celui en paramettre 
        console.log(Wilaya._id);
        const SupplyRequests = await  supplyRequest.aggregate([ //recuperer les demandes de fournitures faites par les etablissements de cete wilaya 
        { "$lookup" : {
            "from" : "establishments",
            "localField" : "establishmentId",
            "foreignField":"_id",
            "as":"infoestablishment"
            }},
            {"$unwind":"$infoestablishment"},
            {
                "$lookup" : {
                    "from" : "supplies",
                    "localField" : "supplyId",
                    "foreignField":"_id",
                    "as":"supplyinfo"
                  }},
                  {"$unwind":"$supplyinfo"},
                  { "$project" : {
                    //"infoestablishment.establishmentName":1,
                    "infoestablishment.establishmentWilaya":1,
                      "suppliesNumber":1,
                      "supplyinfo.supplyType":1,   
                  }},
                  {"$match": {"infoestablishment.establishmentWilaya":Wilaya._id}},
                  {"$group":
                  {
                    "_id" : "$supplyinfo.supplyType",
                    suppliesNumberRequest: { "$sum": "$suppliesNumber" }
                  }
               }
            ])
     res.json(SupplyRequests)
}
catch (error) {
      console.log(error);
}  
   
});







//un representant ministere peut voir les fournitures menquantes au niveau d'un etablissement d'une wilaya selectionnée
router.get('/Request/:wilaya/:establishment', async (req, res) => {
  try {
   const Wilaya= await wilaya.findOne({"wilayaName":req.params.wilaya}) 
   const Establishment = await establishment.findOne({"establishmentName":req.params.establishment,"establishmentWilaya":Wilaya._id})
   console.log(Establishment._id)
   const SupplyRequests = await  supplyRequest.aggregate([{"$match" : {"establishmentId":Establishment._id}},
   { "$lookup" : {
      "from" : "supplies",
      "localField" : "supplyId",
      "foreignField":"_id",
      "as":"supplyinfo"
    }},
    {"$unwind":"$supplyinfo"},
    { "$project" : {
        "suppliesNumber":1,
        "supplyinfo.supplyType":1,
        
    }
  }
    ])
     res.json(SupplyRequests)
}
catch (error) {
      console.log(error);
}  
   
});



module.exports= router;