import React from 'react'
import { useState } from 'react'
import { createInterview } from '../../services/interviewService';
import { useNavigate } from 'react-router-dom';
import Navbar from '../../components/layout/Navbar';
import { Link } from 'react-router-dom';

const InterviewSetup = () => {
    const navigate = useNavigate();
    const [role, setRole] = useState("MERN Developer");
    const [difficulty, setDifficulty] = useState("Easy");
    const [numberOfQuestions, setnumberOfQuestions] = useState(5);

    const handleStart = async (e) => {
        e.preventDefault();
        try {
            const response = await createInterview({
                role,
                difficulty,
                numberOfQuestions,
            });
            navigate(`/interview/details/${response.interview._id}`);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-7">
                    <div className="card shadow border-0 mt-5">
                        <div className="card-body">
                            <form onSubmit={handleStart}>
                                <p className='eyebrow mb-2'>New Session</p>
                                <h2 className='heading text-center'>
                                    Create new Interview
                                </h2>
                                <p className='subtitle mb-4'>Pick a role and difficulty, we will put together in interview. </p>
                                <div className="mb-3">
                                    <label className='form-label heading'>
                                        Role
                                    </label>
                                    <select
                                        className='form-select'
                                        value={role}
                                        onChange={(e) =>
                                            setRole(e.target.value)
                                        }
                                    >
                                        <option>Python Developer</option>
                                        <option>MERN Developer</option>
                                        <option>Java Developer</option>
                                        <option>Frontend Developer</option>
                                        <option>Backend Developer</option>
                                        <option>AIML Engineer</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label heading'>
                                        Difficulty
                                    </label>
                                    <select
                                        className='form-select'
                                        value={difficulty}
                                        onChange={(e) =>
                                            setDifficulty(e.target.value)
                                        }
                                    >
                                        <option>Easy</option>
                                        <option>Medium</option>
                                        <option>Hard</option>
                                    </select>
                                </div>
                                <div className="mb-3">
                                    <label className='form-label heading'>
                                        Questions
                                    </label>
                                    <select
                                        className='form-select'
                                        value={numberOfQuestions}
                                        onChange={(e) =>
                                            setnumberOfQuestions(Number(e.target.value))
                                        }
                                    >
                                        <option>5</option>
                                        <option>10</option>
                                        <option>20</option>
                                        <option>30</option>
                                    </select>
                                </div>
                                <div className="heading alert alert-info">
                                    Estimated Time:{" "}
                                    {numberOfQuestions * 2} Minutes
                                </div>
                                <button className='btns btn btn-outline-light w-100'>
                                    Start Interview
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className='tips-panel mt-3'>
                        <ul>
                            <li>Choose your Role you want to practiced with</li>
                            <li>Prepare well before start</li>
                        </ul>
                    <Link to="/" className='back-link'>Back</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InterviewSetup
