const express=require('express')
const bodyParser=require('body-parser')
const router=express.Router()
//Les Middlewares Utilisés
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

const supply=require('../db/supply')
const wilaya=require('../db/wilaya')
const establishment = require('../db/establishment')
const SupplyStock = require('../db/supplyStock')
const SupplyRequest = require('../db/supplyRequest');

/*Cette route permet de mettre à jour l'état de disponibilité des 
 *fournitures de type 'supply'disponibles au niveau d'un établissement 
 *'establishment' dans une wilaya 'wilaya' 
 */

router.patch('/Stock/:wilaya/:establishment/:supply', async (req,res)=>{
    
    try{
        
        /*Récupérer de la collection wilaya le wilayaCode d'une 
         *wilaya ayant comme nom 'wilaya'
         */
        const Wilaya=await wilaya.findOne({wilayaName:req.params.wilaya})
        /*Récupérer de la collection etablishment le _id d'un 
         *établissement ayant comme nom 'etablishment' et d'une 
         *wilaya 'wilayaCode' 
         */
        const Establishment=await establishment.findOne({establishmentWilaya:Wilaya._id,establishmentName:req.params.establishment})
        /*Récupérer de la collection supply le _id d'une fourniture 
         *ayant comme nom 'supply'
         */
        const supplies=await supply.findOne({supplyType:req.params.supply})
        /*Mettre à jour l'état de disponibilité(suppliesNumber) de 
         *la fourniture supply dans le stock d'un établissement
         */ 
        const supplyStock = await SupplyStock.updateOne({supplyId:supplies._id,establishmentId:Establishment._id},{$set:{suppliesNumber:req.body.suppliesNumber}})
        res.json(supplyStock)
       }
    catch(err)
       {
           console.log(err)
            res.json({message: err})
       }
})
/*Cette route permet de mettre à jour l'état de disponibilité des 
 *fournitures manquantes de type 'supply'  au niveau d'un établissement 
 *'establishement' dans une wilaya 'wilaya'
 */
router.patch('/Request/:wilaya/:establishment/:supply', async (req,res)=>{
    
    try{
        /*Récupérer de la collection wilaya le wilayaCode d'une 
         *wilaya ayant comme nom 'wilaya'
         */
        const Wilaya=await wilaya.findOne({wilayaName:req.params.wilaya})
        /*Récupérer de la collection etablishment le _id d'un 
         *établissement ayant comme nom 'etablishment' et d'une 
         *wilaya 'wilayaCode'
         */ 
        const Establishment=await establishment.findOne({establishmentWilaya:Wilaya._id,establishmentName:req.params.establishment})
        /*Récupérer de la collection supply le _id d'une fourniture
         *ayant comme nom 'supply'
         */
        const supplies=await supply.findOne({supplyType:req.params.supply})
        /*Mettre à jour l'état de disponibilité(suppliesNumber) de 
         *la fourniture supply dans le stock d'un établissement
         */ 
        
        const supplyRequest = await SupplyRequest.updateOne({supplyId:supplies._id,establishmentId:Establishment._id},{$set:{suppliesNumber:req.body.suppliesNumber}})
        res.json(supplyRequest)
       }
    catch(err)
       {
           console.log(err)
            res.json({message: err})
       }
})
module.exports=router