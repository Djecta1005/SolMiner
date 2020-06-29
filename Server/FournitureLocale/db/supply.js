const mongoose=require('mongoose')
const supplySchema=mongoose.Schema({
    supplyType:{
		type :String,
		required : true,
		Unique : true
}
})
module.exports=mongoose.model('supply',supplySchema)