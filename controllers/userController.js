// Models Location
const { userModel } = require("../models/userModel");


const registerController = async (req,res) => {
    const{ email,password } = req.body;
    try {
        const isPresent = await userModel.findOne({email});
        if(isPresent) return res.status(200).send({
            "Message":"User already exists"
        });

        bcrypt.hash(password , 5 , async (err,hash)=>{
            if(err) return res.status(500).send({
                "Message":"Contact to administrator"
            })

            const data = new userModel({ 
                email,
                password:hash
            });
            await data.save();

            res.status(201).send({
                "Message":"User Registered Successfully",
                "Data": data
            })
        });
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message": error.message
        })
    }
};


const loginController = async (req,res) => {
    const { email, password } = req.body;
    try {
        const isPresent = await userModel.findOne({email: email});
        if(!isPresent) return res.status(401).send({
            "Message":"User not found"
        });
    
        const hashedPassword = isPresent?.password;
    
        bcrypt.compare(password, hashedPassword,(err,result)=>{
            if(!result) return res.status(404).send({
                "Message":"login failed"
            });
                
            const Normal_Token = jwt.sign({"masai":"masai"}, process.env.NORMAL_KEY,{expiresIn:"7d"});
                    
            res.cookie("Normal_Token", Normal_Token);
    
            res.status(201).send({
                "Message":"Login successful",
                "Token": Normal_Token,
                "Data" : isPresent
            });
        });    
    } catch (error) {
        console.log(error.message);
        res.status(500).send({
            "Message":error.message
        })
    }
};

module.exports = { registerController , loginController }