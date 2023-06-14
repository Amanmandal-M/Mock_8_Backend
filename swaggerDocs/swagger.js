/**
 * @swagger
 * components:
 *   schemas:
 *     users:
 *       type: object
 *       properties:
 *         id:
 *           type: ObjectId
 *           description: Id of the user
 *         email:
 *           type: string
 *           description: Email of the user
 *         password:
 *           type: string
 *           description: Password of the user
 *       required:
 *         - email
 *         - password
 *       example:
 *         _id: 1
 *         email: amanmandal644@gmail.com 
 *         password: aman123
 */


/**
 * @swagger
 * components:
 *   schemas:
 *     products:
 *       type: object
 *       properties:
 *             name:
 *                  type : String
 *                  description: Name of Product. 
 *             description:
 *                  type : String
 *                  description: Description of Product. 
 *             category:
 *                  type : String
 *                  description: Category of Product. 
 *             image:
 *                  type : String
 *                  description: image of Product. 
 *             location:
 *                  type : String
 *                  description: location of booked Product. 
 *             postedAt:
 *                  type : String
 *                  description: Date and time of Product. 
 *             price:String
 *                   type : String
 *                  description: Price of Product
 *       example:
 *           name : "Pizza"
 *           description : "Very Delicious Pizza toppings are also added." 
 *           category : "Pizza"
 *           image : "Pizza"
 *           location : "Pizza"
 *           postedAt : "Pizza"
 *           price : "Pizza"
 */