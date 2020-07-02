const express=require('express')
const router=express.Router()
const bodyParser=require('body-parser')
//Les Middlewares Utilisés
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const wilaya=require('../db/wilaya')
const establishment = require('../db/establishment')
const SupplyStock = require('../db/supplyStock')
/*Cette route permet de récupérer la liste des information concernant
 * fournitures disponibles au niveau d'un établissement 'establishment'
 * d'une wilaya ayant comme nom 'wilaya'
 */
router.get('/Stock/:wilaya/:establishment',async (req,res)=>{
    
    try{
        /*Récupérer de la collection wilaya le wilayaCode d'une 
         *wilaya ayant comme nom 'wilaya'
         */
        const Wilaya=await wilaya.findOne({wilayaName:req.params.wilaya})
        /*Récupérer de la collection etablishment le _id d'un 
         *établissement ayant comme nom 'etablishment' et d'une
         * wilaya dont le _id est '_id'
         */ 
        const Establishment=await establishment.findOne({establishmentWilaya:Wilaya._id,establishmentName:req.params.establishment})
        /*Récupérer de la collection supplyStock l'ensemble des 
         *fourniture disponibles au niveau d'un établissement ayant 
         *comme _id '_id'
         */
        const supplyStock=await SupplyStock.aggregate([{ "$match": { "establishmentId": Establishment._id } },
            { "$lookup": {
            "localField": "supplyId",
            "from": "supplies",
            "foreignField": "_id",
            "as": "supplyinfo"
            }},
            { "$unwind": "$supplyinfo" },
            { "$project": {
              "suppliesNumber": 1,
              "supplyinfo.supplyType": 1
            } }])
        res.json(supplyStock)
       }
    catch(err)
       {
           console.log(err)
            res.json({message: err.message})
       }
})
module.exports=router