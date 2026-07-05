const User = require("../models/user");
const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken");


module.exports.Register = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        console.log(req.body);
        console.log(email);
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json({ message: "User already exists" });
        }
        const user = await User.create({ name, email, password });
        const token = jwt.sign(
        {
           id: user._id,
        },
        process.env.JWT_SECRET,
        {
            expiresIn : "7d",
        }
        )
        res.status(201).json({ message: "User signed in successfully",token,user});
    } catch (error) {
        console.log(error);
    }
};

module.exports.Login = async(req,res,next) => {
    try{
       const {email,password} = req.body;
       if(!email || !password){
        return res.json({message : "All fields are required"});
       }
       const user = await User.findOne({email});
       if(!user){
          return res.json({message : "User do not exists .. Please check your credentials"});
       }
       const auth = await bcrypt.compare(password, user.password);
       if(!auth){
            return res.json({message : "Incorrect password or email"})
       }
       const token = jwt.sign(
      {
        id: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );
       res.status(201).json({message : "User logged in successfully",token,user,success:true});
    }catch(error){
        console.log(error);
    }
}