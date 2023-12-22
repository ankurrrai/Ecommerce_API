const { query } = require('express');
const Product =require('../../models/products');

// To add product in cart
module.exports.create=async function(req,res){
    try {

        if (req.body.name!='' && req.body.quantity!=''){

            let product=await Product.create({name:req.body.name,quantity:req.body.quantity});
            if (product){
                return res.status(200).json({
                    data:{
                        product: {name:req.body.name,quantity:req.body.quantity}
                    }
                })
            }

        } else{
            return res.status(404).json({
                data:{
                    message:`Error : Please provide produc name and quantity!`
                }
            }) 
        }
    } catch (err) {
        console.log('Error in productCart.js -> create : ',err)
        return res.status(502).json({
            data:{
                message:`Error : ${err}`
            }
        })
    }
}

// To check all products which is available in cart
module.exports.products= async function(req,res){

    try {
        
        let products=await Product.find({})
        if (products){
            return res.status(200).json({
                data:{
                    products: products
                }
            })
        }

        
    } catch (err) {

        console.log('Error in productCart.js -> product  : ',err)
        return res.status(502).json({
            data:{
                message:`Error : ${err}`
            }
        })
    }
}

// to delete product from cart
module.exports.destroy=async function(req,res){
    try {
        if (req.params.id !='') {
            let val=await Product.deleteOne({_id:req.params.id})
            if (val.deletedCount>0) {
                return res.status(400).json({
                    data:{
                        message: 'product deleted'
                    }
                })
            } else  {
                return res.status(404).json({
                    data:{
                        message:'Product is not found'
                    }
                })
            }
        }
    } catch (err) {
        console.log('Error in productCart.js -> destroy  : ',err)
        return res.status(502).json({
            data:{
                message:`Error : ${err}`
            }
        })
    }
}

// to update the cart quantity for specific product
module.exports.update_quantity=async function(req,res){
    try {

        if (req.params.id!='' && req.query.number!='' && req.query.number!=0) {

            await Product.findByIdAndUpdate(req.params.id,{ quantity: req.query.number });
            let product=await Product.findById(req.params.id)
            if(product){
                return res.status(202).json({
                    data: {
                        product:{
                            id:product._id,
                            name:product.name,
                            quantity:product.quantity
                        },
                        message: 'updated successfully'
                    }
                })
            } else  {
                return res.status(404).json({
                    data:{
                        message:'Product is not found'
                    }
                })
            }

        } else  {
            return res.status(404).json({
                data:{
                    message:'Kindly Check the product id and quantity..'
                }
            })
        }


        
    } catch (err) {
        console.log('Error in productCart.js -> update_quantity  : ',err)
        return res.status(502).json({
            data:{
                message:`Error : ${err}`
            }
        })
    }
}