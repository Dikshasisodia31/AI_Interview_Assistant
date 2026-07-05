const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const authRoutes = require("./routes/authRoute")
const interviewRoutes = require("./routes/interviewRoutes");
const app = express();


mongoose.connect(process.env.MONGO_URL,{
})
.then(()=> console.log("MongoDB is connected succesfully"))
.catch((err)=>console.log(err));
mongoose.connection.once("open", () => {
  console.log("Connected DB:", mongoose.connection.name);
});

app.use(cors());
app.use(express.json());

app.use("/api/auth",authRoutes);
app.use("/api/interviews",interviewRoutes);

app.get("/",(req,res)=>{
    res.send("Server is working");
})

module.exports = app;