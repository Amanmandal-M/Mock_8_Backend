# Olx Delivey App Backend System

## About

<br>

This is Olx Delivey App so user can register with valid credentials and login with valid credentials and after authentication user can see products and add products ,  if user wants to view the single product items etc. they can also view and if user wants to edit anything so they can also do this.

<br>

## Installation

```
npm install
```

## Start the Backend server 

```
npm run start

npm run server

node index.js

nodemon start

nodemon index.js
```

Note : You can use any of them 

<br>

##  MVC Structure

```
├── index.js
├── configs
|    └── db.js
├── models
|    └── userModel.js
|    └── productModel.js
├── routes
|    └── userRoute.js
|    └── productRoute.js
├── middlewares
|    └── authenticationMiddleware.js
├──controllers
|    └── userController.js
|    └── productController.js
```

Note: 

- Before doing anything first create `.env` file and put `PORT` , `MONGO_URL` , `NORMAL_KEY`.
- `PORT` is for listening the server.
- `MONGO_URL` is for running database and store your data in database so put your mongo link.
- `NORMAL_KEY` is for authentication jsonwebtoken so basically this is your secret key .

<br>

## Schema Design

<br>

<h3><strong>User Schema</strong><h3>

```
{
    _id: ObjectId,
    email :String,
    password :String
}
```

<h3><strong>Product Schema</strong><h3>

```
{
   _id: ObjectId,
   Name:String,
   Description:String,
   Category:String,
   ImageURL:String,
   Location:String,
   Date:Date,
   Price:String
}
```

## Endpoints

<table>
    <thead>
        <tr>
            <th>METHOD</th>
            <th>ENDPOINT</th>
            <th>DESCRIPTION</th>
            <th>STATUS CODE</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>POST</td>
            <td>/api/signup</td>
            <td>This endpoint should allow users to register. Hash the password on store.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/login</td>
            <td>This endpoint should allow users to login. Return JWT token on login.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/products?limit=`page limit`</td>
            <td>This endpoint is for view all products.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/products/:id</td>
            <td>This endpoint is for view single product by Id.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/productSearch?search=`your data`</td>
            <td>This endpoint is for view searched products.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/productSort?sort=`asc/desc`</td>
            <td>This endpoint is for view sort by date.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>GET</td>
            <td>/api/productFilter?category=`category name`</td>
            <td>This endpoint is for view filter by category.</td>
            <td>200</td>
        </tr>
        <tr>
            <td>POST</td>
            <td>/api/products</td>
            <td>This endpoint is for add a new product.</td>
            <td>201</td>
        </tr>
        <tr>
            <td>PATCH</td>
            <td>/api/products/:id</td>
            <td>This endpoint should allow the user to place an order.</td>
            <td>204</td>
        </tr>
        <tr>
            <td>DELETE</td>
            <td>/api/products/:id</td>
            <td>This endpoint is for delete products by id.</td>
            <td>202</td>
        </tr>
    </tbody>
</table>