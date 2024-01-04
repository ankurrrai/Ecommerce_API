const mongoose=require('mongoose')

main().catch(function(err){
    console.log(`Errror in mongoose.js -> while connecting with db : ${err} `)
})
// setup the mongoose connection
async function main (){
    mongoose.connect(process.env.ecommerce_mogourl)
    
}

// aquire the connection
const db=mongoose.connection;
db.on('error',console.error.bind(console,'Error while eastablished the connect with db'));
db.once('open',function(){
    console.log('Connection has eastablished with db')
})

module.exports=db