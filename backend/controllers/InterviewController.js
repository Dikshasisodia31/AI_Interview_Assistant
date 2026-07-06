const Interview = require("../models/interview");
const {generateQuestions} = require("../services/geminiService")

module.exports.createInterview = async (req,res) => {
    try{
        const {role,difficulty,numberOfQuestions} = req.body;
        console.log(role);
        console.log(difficulty);
        console.log(numberOfQuestions);
        const interview = await Interview.create({
            user_id : req.id,
            role,
            difficulty,
            numberOfQuestions
        });
        return res.status(201).json({message:"Interview is created",interview});
    }catch(error){
        console.log(error);
        return res.json({message : "There is an error",error});
    }
}

module.exports.generateInterviewQuestions = async(req,res) =>{
    try{
        const interview = await Interview.findById(req.params.id);;
        if(!interview){
            return res.status(404).json({
                success:false,
            })
        }
        const questionsText = await generateQuestions(
            interview.role,
            interview.difficulty,
            interview.numberOfQuestions
        );
        
        interview.questions = questionsText.map(question => ({
            question
        }));

        await interview.save();
        
        return res.status(200).json({
            success:true,
            questions : interview.questions
        })
    }catch(error){
        console.log(error);
        res.status(500).json({
            success:false,
            message:error.message,
     });
    }
};

module.exports.getInterviewById = async(req,res) => {
    try{
        const interview = await Interview.findById(req.params.id);
        if(!interview){
            return res.status(404).json({
                success : false,
                message : "Interview not found"
            });
        }

        return res.status(200).json({
            success : true,
            interview
        });
    }catch(err){
        console.log(error);
        res.status(500).json({
            success : false,
            message : err.message,
        });
    }
}