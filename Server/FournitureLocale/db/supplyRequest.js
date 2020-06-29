const mongoose=require('mongoose')
const supplyRequestSchema=mongoose.Schema({
    supplyId:{
		type : mongoose.Schema.Types.ObjectId,
		required : true,
		ref : 'Supply'
},
establishmentId:{
		type : mongoose.Schema.Types.ObjectId,
		required : true,
		ref : 'Establishment'
},
suppliesNumber:{
		type :Number,
		required : true,
		default: 0
}


})
module.exports=mongoose.model('SupplyRequest',supplyRequestSchema)