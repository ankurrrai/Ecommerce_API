const express=require('express');
const router=express.Router();

// aquire the index from api folder
router.use('/products',require('./api/index'))
      

module.exports=router;
