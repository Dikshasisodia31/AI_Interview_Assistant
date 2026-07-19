const mongoose = require("mongoose");

const interviewSchema = new mongoose.Schema(
    {
        user_id : {
            type:mongoose.Schema.Types.ObjectId,
            ref : "User",
        },

        role : {
            type : String,
            required : true,
        }, 

        difficulty : {
            type : String,
            enum : [
                "Easy",
                "Medium",
                "Hard",
            ],
            default : "Easy",
            required : true,
        },
        numberOfQuestions: {
            type: Number,
            min : 1,
            max: 20
        },
        status : {
            type : String,
            enum : [
                "IN_PROGRESS",
                "COMPLETED"
            ],
            default : "IN_PROGRESS",
        },
        
        score :{
            type : Number,
            default : 0
        },
        
        overallfeedback : [{
            type : String,
        }],
        
        questions : [
            {
               question : String,
               answer : {
                 type : String,
                 default : ""
               },
               feedback : {
                 type : String,
                 default : ""
               },
               score : {
                 type : Number,
                 default : 0
               }
            },
        ],

        strengths : [{
            type : String,
        }],
        weaknesses : [{
            type : String,
        }]
    },
    {
        timestamps:true,
    }
);

module.exports = mongoose.model("Interview", interviewSchema);