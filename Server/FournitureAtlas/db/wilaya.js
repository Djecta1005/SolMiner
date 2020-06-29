const mongoose=require('mongoose')
const wilayaSchema=mongoose.Schema({
    wilayaCode:{
		type : Number,
		required : true,
		Unique : true
},
    wilayaName:{
		type :String,
		required : true,
		Unique : true
}

})
module.exports=mongoose.model('wilaya',wilayaSchema)