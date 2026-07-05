const mongoose =require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema(
    {
    name : {
        type:String,
        required:[true,"Your name is required"],
    },
    email:{
        type:String,
        required:[true,"Your email is required"],
        unique:true,
    },
    password:{
        type:String,
        required:[true,"Choose a strong password"],
    },
},{
    timestamps:true,
});

userSchema.pre("save",async function (){
    if (!this.isModified("password")) return;
    this.password = await bcrypt.hash(this.password,12);
});

module.exports = mongoose.model("User",userSchema);