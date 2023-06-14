// ----------------------------->>>>>>> Schema <<<<<<<-----------------------------
// ------->>> Users Schema <<<-------

/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:
 *       type: apiKey
 *       in: header
 *       name: Authorization
 *       description: Bearer token authorization header
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Users:
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

// ------->>> Products Schema <<<-------

/**
 * @swagger
 * components:
 *   schemas:
 *     Products:
 *       type: object
 *       properties:
 *         _id:
 *           type: ObjectId
 *           description: Id of the product
 *         name:
 *           type: string
 *           description: Name of Product.
 *         description:
 *           type: string
 *           description: Description of Product.
 *         category:
 *           type: string
 *           description: Category of Product.
 *         image:
 *           type: string
 *           description: Image of Product.
 *         location:
 *           type: string
 *           description: Location of booked Product.
 *         postedAt:
 *           type: string
 *           description: Date and time of Product.
 *         price:
 *           type: string
 *           description: Price of Product
 *       example:
 *         _id: ObjectId('647b63d83391dbb919246df6')
 *         name: Nike Air
 *         description: Almost brand new, rarely used
 *         category: clothing
 *         image: https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/7fbc5e94-8d49-4730-a280-f19d3cfad0b0/custom-nike-air-max-90-by-you.png
 *         location: india
 *         postedAt: 2023-02-01
 *         price: 7999
 *         email: amanmandal644@gmail.com 
 *         password: aman123
 */



// ----------------------------->>>>>>> Routes <<<<<<<-----------------------------

// ------->>> Users Routes <<<-------

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: The User APIs
 */

/**
 * @swagger
 * /signup:
 *   post:
 *     summary: user can register from this route
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: User Registered Successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal Server Error or Contact to administrator
 *       401:
 *         description: User already exists
 */

/**
 * @swagger
 * /login:
 *   post:
 *     summary: user can login from this route
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Users'
 *     responses:
 *       201:
 *         description: Login successful
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Users'
 *       500:
 *         description: Internal Server Error or Contact to administrator
 *       401:
 *         description: User not found
 *       404:
 *         description: Login failed
 */


// ------->>> Product Routes <<<-------

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: The User APIs
 */
 
/**
 * @swagger
 * /products:
 *   get:
 *     summary: Returns the list of all the products.
 *     tags: [Products]
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: Return all Products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Products'
 *       500:
 *         description: Internal Server Error
 */