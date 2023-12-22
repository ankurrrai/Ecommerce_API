const express=require('express');
const app=express();
const port=8000;

// setup the url encoded
app.use(express.urlencoded());

const db=require('./config/mongoose')

// use express router
app.use('/',require('./routes/index'));

app.listen(port,function(err){
    if (err) {
        console.log('Error in running server : ',err)
    }
    console.log('Server is running on port :', port)
})