import React from 'react'
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar'
import { useNavigate } from 'react-router-dom'
import api from '../../services/api'

const InterviewDetails = () => {
    const {id} = useParams();
    const Navigate = useNavigate();

    const [interview, setInterview] = useState(true);
    const [loading, setLoading] = useState(true);
    const [generating, setGenerating] = useState(false);

    useEffect(() => {
        fetchInterview();
    },[]);

    const fetchInterview = async () => {
        try{
            const res = await api.get(`/interviews/${id}`);
            setInterview(res.data.interview);
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    };

    const handleGenerate = async () =>{
        try{
            setGenerating(true);
            await api.post(`interviews/${id}/generate`);
            await fetchInterview();
        }catch(error){
            console.log(error);
        }finally{
            setGenerating(false);
        }
    };

    if(loading){
        return (
            <div className="container text-center mt-5">
                <div className='spinner-border text-primary'></div>
            <h5 className='mt-3 text-muted'>Loading Interview. Please wait ........ </h5>
            </div>
        );
    }

    const questionsGenerated = interview.questions && interview.questions.length > 0;

    return (
        <div>
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                    <div className="card shadow border-0">
                    <div className="card-body p-5">
                    <h3 className='heading'>Your interview is scheduled successfully.</h3>
                    <div className='alert alert-success'>Interview has been created successfully.</div>
                    
                    <table className='table table-bordered'>
                        <tbody>
                            <tr>
                                <th>Interview ID</th>
                                <td>{interview._id}</td>
                            </tr>
                            <tr>
                                <th>Role</th>
                                <td>{interview.role}</td>
                            </tr>
                            <tr>
                                <th>Difficulty</th>
                                <td>{interview.difficulty}</td>
                            </tr>
                            <tr>
                                <th>Questions</th>
                                <td>{interview.numberOfQuestions}</td>
                            </tr>
                            <tr>
                                <th>Estimated Duration</th>
                                <td>{interview.numberOfQuestions*2}</td>
                            </tr>
                        </tbody>
                    </table>
                    <div className="alert alert-info mt-4">
                        <h5>Before you begin :</h5>
                        <ul className='mb-0'>
                            <li>Read each question carefully</li>
                            <li>Make sure you have a stable internet connection.</li>
                            <li>Find a quiet environment.</li>
                            <li>Keep your camera and microphone ready (if applicable)</li>
                            <li>Once questions are generated, they cannot be changed</li>
                        </ul>
                        <div>
                    </div>
                    </div>
                    <div className='text-center mt-4'>
                        
                    {!questionsGenerated ? (

                  <button
                    className="btn btn-primary me-3"
                    onClick={handleGenerate}
                    disabled={generating}
                  >

                    {generating ? (
                      <>
                        <span
                          className="spinner-border spinner-border-sm me-2"
                        ></span>

                        Generating Questions...
                      </>
                    ) : (
                      "Generate Questions"
                    )}

                  </button>

                ) : (

                  <button
                    className="btn btn-success me-3"
                    onClick={() =>
                      Navigate(`/interview/session/${id}`)
                    }
                  >
                    Start Interview
                  </button>

                )}
                    </div>
                    <h5>OR</h5>
                    <div>
                        <button className='btn btn-primary' onClick={()=>{Navigate("/dashboard")}}>Back to dashboard</button>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
        </div>
    )
}

export default InterviewDetails