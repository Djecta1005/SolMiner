const mongoose=require('mongoose')
const establishementSchema=mongoose.Schema({
    establishmentName:{
		type :String,
		required : true,
},
establishmentWilaya:{
	type : mongoose.Schema.Types.ObjectId,
    ref : 'wilaya',
    required : true
},
establishmentAddress:{
		type :String,
		required : true
},
establishmentType:{
		type :String,
		enum : ['HOPITAL', 'LABORATOIRE'],
		required : true
}

})
module.exports=mongoose.model('establishment',establishementSchema)
