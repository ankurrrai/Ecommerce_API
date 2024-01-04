# Ecommerce_API
 This is api based project for ecommerce site in which user can add to cart, update the card and also remove from cart.

 # Local System setup configuration.

 1. Pull the master branch from terminal or Download from github.
 2. Give the following commands: <br>
    i) npm install <br>
    ii) npm start <br>
3. You can hit the api on postman with following URLs: <br>
   i) URL [POST]: /products/create // also pass the body with key as name & quantity <br>
   ii) URL [DELETE] : /products/:id // pass the product id in param <br>
   iii) URL [POST]: /products/:id/update_quantity/?number=10 // pass the product id in param and query <br>
   iv) URL [GET]: /products  //to fetch the all products which is in cart <br>

# Domain at which this project is live
https://ecommerce-bkig.onrender.com/products
