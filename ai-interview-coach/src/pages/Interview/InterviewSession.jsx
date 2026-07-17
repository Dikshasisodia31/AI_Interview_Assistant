import React from 'react'
import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import api from '../../services/api';

const InterviewSession = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [interview, setInterview] = useState(null);
    const [loading, setLoading] = useState(true);

    const INTERVIEW_TIME = 10*60;

    const [timeLeft, setTimeLeft] = useState(INTERVIEW_TIME);
    const [submitting, setSubmitting] = useState(false);

    useEffect(() => {
        fetchInterview();
    }, []);

    useEffect(()=>{
         if(timeLeft <= 0){
            handleSubmitInterview();
            return;
         }
         const timer = setInterval(()=>{
            setTimeLeft((prev) => prev-1);
         },1000);

         return () => clearInterval(timer);
    },[timeLeft]);

    const fetchInterview = async () => {
        try {
            const response = await api.get(`interviews/${id}`);
            setInterview(response.data.interview);
        } catch (error) {
            console.log(error.message);
        } finally {
            setLoading(false);
        }
    };

    if (loading) {
        return <h3 className='text-center'>Loading....</h3>
    }

    if (!interview) {
        return <h3 className='text-center'>Interview not found.</h3>
    }

    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds/60);
        const secs = seconds % 60;

        return `${String(minutes).padStart(2,"0")} : ${String(secs).padStart(2,"0")}`;
    };

    const question = interview.questions[currentQuestion];

    const handleAnswerChange = (e) => {
        console.log(e.target.value);

        const updatedQuestions = [...interview.questions];

        updatedQuestions[currentQuestion] = {
            ...updatedQuestions[currentQuestion],
            answer: e.target.value,
        };

        setInterview({
            ...interview,
            questions: updatedQuestions,
        });
    };

    const handlePrev = () => {
        if (currentQuestion > 0) {
            setCurrentQuestion(currentQuestion - 1);
        }
    };

    const handleNext = () => {
        if (currentQuestion < interview.questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        }
    };


    const handleSubmitInterview = async () => {
        if(submitting) return;
        setSubmitting(true);
        try {
            await api.put(`/interviews/${id}/submit`, {
                questions: interview.questions,
            })
            navigate(`/interview/result/${id}`);
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col">
                    <div className="card text-center mt-5 shadow border-0">
                        <div className="card-body p-5">
                            <div>
                                <span className='head1 badge'>
                                    Question {currentQuestion + 1} of {interview.questions.length};
                                </span>
                                <span className={`badge fs-6 ${timeLeft <= 10 ? "bg-danger" : "bg-success"}`}>
                                    {formatTime(timeLeft)}
                                </span>
                            </div>
                            <h2 className='mb-4'>
                                {question.question}
                            </h2>
                            <div>
                                <label className='form-label'>
                                    Your answer.
                                </label>
                                <textarea className='form-control'
                                    placeholder="Write your answer here..."
                                    value={question.answer}
                                    onChange={handleAnswerChange}
                                />
                            </div>
                            <button disabled={currentQuestion == 0}
                                onClick={handlePrev}
                                className='btns mt-3 m-3'
                            >Previous
                            </button>

                            {currentQuestion === interview.questions.length - 1 ? (
                                <button
                                    className='btns btn btn-outline-light'
                                    onClick={handleSubmitInterview}
                                    disabled={submitting}>
                                    {submitting ? "Submitting..." : "Submit Interview"}
                                </button>
                            ) : (
                                <button
                                    disabled={currentQuestion == interview.questions.length - 1}
                                    onClick={handleNext}
                                    className='btns'
                                >
                                    Next
                                </button>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterviewSession