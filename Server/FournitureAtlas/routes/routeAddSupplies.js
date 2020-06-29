const express = require('express');
const router = express.Router();
const Supply = require('../db/supply');
const SupplyRequest = require('../db/supplyRequest');
const SupplyStock = require('../db/supplyStock');
const Establishment = require('../db/establishment');

//--------------------------------------------------- Add supplies ----------------------------------------
router.post('/AddSupply', (req,res) => {                     
    const supply = new Supply ({
        supplyType: req.body.supplyName
    });
    
    supply.save()
    .then( data => {
        res.json(data);
    })
    .catch (err =>{
        res.json({message : err}); 
    });
});

//---------------------------------------------------ADD SUPPLYREQUEST ------------------------------------------
var id;
router.post('/supplyrequest', (req,res) => {  
    if (req.body.supplyrequestNumber>0){   
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("supplyDB");
        dbo.collection("supplies").findOne({"supplyType":req.body.supplyName}, function(err, result) {
          if (err) throw err;
          dbo.collection("supplyrequests").findOne({"supplyID":result._id}, function(err, resu){
            if (resu){
                res.json({error : "Requete request deja existante"});
            }
            else{
          const supplyRequest = new SupplyRequest ({
              supplyID: result._id,
              establishmentID: req.body.establishmentID,
              suppliesNumber: req.body.supplyrequestNumber
          });
          supplyRequest.save()
          .then( data => {
              res.json(data);
          })
          .catch (err =>{
              res.json({message : err}); 
          });
          
          db.close();
        }
        });
      });
    });
    }else{
        res.json({error : "Veuillez introduire un nombre supérieur à 0"});
    }
});

//---------------------------------------------------ADD SUPPLYSTOCK ------------------------------------------

router.post('/supplystock', (req,res) => {  
                 
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("supplyDB");
        dbo.collection("supplies").findOne({"supplyType":req.body.supplyName}, function(err, result) {
          if (err) throw err;
          dbo.collection("supplystocks").findOne({"supplyID":result._id}, function(err, resu2){
           if (resu2){
                res.json({error : "Requete stock deja existante"});
            }
            else{
          const supplyStock = new SupplyStock ({
              supplyID: result._id,
              establishmentID: req.body.establishmentID,
              suppliesNumber: req.body.supplystockNumber
          });
          supplyStock.save()
          .then( data => {
              res.json(data);
          })
          .catch (err =>{
              res.json({message : err}); 
          });
          
          db.close();
        }
        });
    }); 
});
});

//----------------------------------------------ADD LES 2 EN MEME TEMPS----------------------------------------------------------------
var id;
router.post('/',async (req,res) => {  

    /*if (req.body.supplyrequestNumber>0){   
    var MongoClient = require('mongodb').MongoClient;
    var url = "mongodb://localhost:27017/";
    MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
        if (err) throw err;
        var dbo = db.db("ICARE");
        dbo.collection("supplies").findOne({"supplyType":req.body.supplyName}, function(err, result) {
            if (err) throw err;
            dbo.collection("supplyrequests").findOne({"supplyId":result._id},{"establishmentId":req.body.establishmentID} ,function(err1, resu){
            dbo.collection("supplystocks").findOne({"supplyID":result._id},{"establishmentId":req.body.establishmentID}, function(err2, resu2){
                if (err1){
                    
                    res.json({error : "Requete request deja existante"});
                }else if (resu2){
                    res.json({error : "Requete stock deja existante"});
                }
                else{
          const supplyRequest = new SupplyRequest ({
              supplyID: result._id,
              establishmentID: req.body.establishmentID,
              suppliesNumber: req.body.supplyrequestNumber
          });
          const supplyStock = new SupplyStock ({
            supplyID: result._id,
            establishmentID: req.body.establishmentID,
            suppliesNumber: req.body.supplystockNumber
        });
          supplyRequest.save()
          .catch (err =>{
              res.json({message : err}); 
          });
          supplyStock.save()
          .catch (err =>{
              res.json({message : err}); 
          });
          res.json({supplyID:supplyStock.supplyID, establishmentID: req.body.establishmentID, supplyrequestNumber:supplyRequest.suppliesNumber, supplystockNumber:supplyStock.suppliesNumber })
          db.close();
        }
        });
        });
        });
      });
    }else{
        res.json({error : "Veuillez introduire un nombre de fournitures demandées supérieur à 0"});
    }*/
    
       
       
        try{
            const supplies=await Supply.findOne({supplyType:req.body.supplyName})
                 const supplyStock=await SupplyStock.findOne({"supplyId":supplies._id},{"establishmentId":req.body.establishmentID})
                const supplyRequest=await SupplyRequest.findOne({"supplyId":supplies._id},{"establishmentId":req.body.establishmentID} )
                if(supplyStock!=null)
                {
                   
                    res.json({message : "Requete stock deja existante"})

                } 
                else {
                const supplyStock1=new SupplyStock({
                supplyId:supplies._id,
                establishmentId:req.body.establishmentID,
                suppliesNumber:req.body.supplystockNumber
                 })
                const savedSupplyStock=await supplyStock1.save()
                res.json(savedSupplyStock)
                }
                if(supplyRequest!=null)
                {
                
                 res.json({message:"Requete request deja existante"})
         
                } 
                else {
                const supplyRequest1=new SupplyRequest({
                supplyId:supplies._id,
                establishmentId:req.body.establishmentID,
                suppliesNumber:req.body.supplyrequestNumber
                })
                const savedSupplyRequest=await supplyRequest1.save()
                res.json(savedSupplyRequest)
                }
        }
       
       catch(err){
           res.json({message: err.message})
       } 
})

//--------------------------------------------------- DELETE ----------------------------------------------------------------------------------

/*router.delete('/delete', async (req,res) => { 
    try{
        var MongoClient = require('mongodb').MongoClient;
        var url = "mongodb://localhost:27017/";
        MongoClient.connect(url,{ useUnifiedTopology: true }, function(err, db) {
            if (err) throw err;
            var dbo = db.db("supplyDB");
            dbo.collection("supplies").findOne({"supplyType":req.body.supplyName}, function(err, result) {
                var myquery = { supplyID: result._id };
                dbo.collection("supplyrequests").deleteOne(myquery, function(err, obj) {
                dbo.collection("supplystocks").deleteOne(myquery, function(err, obj){
                if (err) throw err;
                res.json("successfuly deleted");                    
                db.close();
                });
                });
            });
        });
    }catch(err){
        res.json(err);
    }
});*/
//---------------------------------------------------------------------------------------------------------------------------------------------
module.exports = router;