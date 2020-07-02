const express=require('express')
const Cors=require('cors')
const mongoose=require('mongoose')
require('dotenv/config')
const bodyparser=require('body-parser')
const routeStockWilaya=require('./routes/routeWilayaStock')
const routeStockMinastry=require('./routes/routeMinastryStock')
const routeUpdateSupplies=require('./routes/routeUpdateSupplies')
const routeRequestMinastry=require('./routes/routeMinastryRequest')
const routeRequestWilaya=require('./routes/routeWilayaRequest')
const routeAddSupplies=require('./routes/routeAddSupplies')
const routeDeleteSupplies=require('./routes/routeDeleteSupplies')
//Les Middlewares Utilisés
const app=express()
app.use(Cors())
app.use(bodyparser.json())
app.use('/supply/Wilaya',routeStockWilaya)
app.use('/supply/Minestary',routeStockMinastry)
app.use('/supply/update',routeUpdateSupplies)
app.use('/supply/Minestary',routeRequestMinastry)
app.use('/supply/Wilaya',routeRequestWilaya)
app.use('/supply/add',routeAddSupplies)
app.use('/supply/delete',routeDeleteSupplies)
//Connection à la base de donné
mongoose.connect(process.env.DB_CONNECTION/*'mongodb://localhost:27017/ICARE'*/,{
     useNewUrlParser: true,
     useUnifiedTopology: true
    },()=>{
    console.log('Connected to DB!!')
})
//Écouter le port 3000
app.listen(3000,()=>{
    console.log('server is running en port:3000...')

})