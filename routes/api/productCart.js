const express=require('express');
const router=express.Router();

const productCartController=require('../../controllers/api/productCart')

router.post('/create',productCartController.create); //to create
router.get('/',productCartController.products); //to check all available product
router.delete('/:id',productCartController.destroy);  //to delete product
router.post('/:id/update_quantity',productCartController.update_quantity) //to update the quantity of product

module.exports=router;
