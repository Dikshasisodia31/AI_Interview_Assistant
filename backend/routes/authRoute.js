const express = require("express");
const router = express.Router();
const {Register,Login} = require("../controllers/authController")


router.get("/",(req,res)=>{
    res.json({
        message : "Auth route is working",
    });
});
router.post("/register",Register);
router.post("/login",Login);

module.exports = router;