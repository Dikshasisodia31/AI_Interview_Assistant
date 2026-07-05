import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
import { sampleQuestions } from '../../data/questions';
import { useEffect } from 'react';
import { Navigate , useNavigate } from 'react-router-dom';
import axios from 'axios';

const InterviewSession = () => {
//   const Navigate = useNavigate();
//   const [answer,setAnswer] = useState(" ");
//   const [questions,setQuestions] = useState();
//   const [currentQuestion,setCurrentQuestion] = useState(0);
//   const [loading,setLoading] = useState(true);

//   useEffect(()=>{
//     fetchQuestions();
//   }, []);

//   const fetchQuestions = async () =>{
//     try{
//         const response = await generateQuestions(id);
        
//         setQuestions(response.data.questions);
//     }catch(err){
//        console.log(err);
//     }finally{
//         setLoading(false);
//     }
//   };

//   const handleSubmit = () =>{
//      console.log(answer);

//      setAnswer("");

//      if(currentQuestion < questions.length-1){
//         setCurrentQuestion(currentQuestion+1);
//      }else{
//         Navigate("/interview/result");
//      }
//   };
  return (
    <div className="container">
        {/* <div className="row justify-content-center">
           
            <div className="col">
                <div className="card text-center mt-5 shadow border-0">
                    <div className="card-body p-5">
                        <div>
                        <span className='head1 badge'>
                            Question {currentQuestion+1}/5;
                        </span>
                        </div>
                        <h2 className='mb-4'>
                            {questions[currentQuestion]}
                        </h2>
                        <div>
                            <label className='form-label'>
                               Your answer.
                            </label>
                            <textarea className='form-control'
                            placeholder="Write your answer here..."
                            value={answer}
                            onChange={(e)=>
                                setAnswer(e.target.value)
                            }
                            />     
                        </div>
                        <button className='btns btn btn-outline-light mt-4' onClick={handleSubmit}>Submit Answer</button>
                    </div>
                </div>
            </div>
        </div> */}
        <h1> Hii</h1>
    </div>
  )
}

export default InterviewSession