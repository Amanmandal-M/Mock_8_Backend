const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const app = express();
const swaggerUI = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require('dotenv').config();


// Models Location
const { dbConnection } = require('./configs/db');


// Router Location
const { userRouter } = require('./routes/userRoute');
const { authentication } = require('./middlewares/authenticationMiddleware');
const { productRouter } = require('./routes/productRoute');



// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());


// --------------->>>>>>>> Swagger <<<<<<<<-------------------
const options = {
	definition: {
		openapi: "3.0.0",
		info: {
			title: "Olx Delivey App Backend System",
			version: "1.0.0",
			description: "This is Olx Delivey App so user can register with valid credentials and login with valid credentials and after authentication user can see products and add products ,  if user wants to view the single product items etc. they can also view and if user wants to edit anything so they can also do this.",
		},
		servers: [
			{
				url: "https://olx-classifieds-backend-app.onrender.com/api",
			},
		],
	},
	apis: ["./swaggerDocs/*.js"],
};

const specs = swaggerJsDoc(options);

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(specs));


// Default Routes
app.get('/', (req,res)=>{
    return res.status(200).send(`<h1 style="text-align:center;color:blue;">Welcome to OLX Classifieds Backend App</h1>`)
});


// Routes
app.use("/api" , userRouter);
app.use(authentication);
app.use("/api" , productRouter);



// Server Listening
app.listen(process.env.PORT, async ()=>{
    try {
        await dbConnection;
        console.log(`Connected to Database`);
        console.log(`Server Running on port ${process.env.PORT}`);
    } catch (error) {
        console.log(error.message);
    }
})