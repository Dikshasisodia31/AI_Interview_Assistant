import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../../components/layout/Navbar';
import { registerUser } from '../../services/authService';
import "bootstrap-icons/font/bootstrap-icons.css";

const Register = () => {

  const Navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await registerUser({
        name,
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("token", data.token);
      Navigate('/dashboard', {
        state: {
          name: data.user.name,
        },
      });
    } catch (err) {
      console.log(err);
    }
  };

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <Navbar/>
      <div className="container">
        <div
          className="row justify-content-center align-items-center"
          style={{  }}
        >
          <div className="col-md-5">
            <div className="card shadow border-90">
              <div className="card-body p-5">

                <h2 className="head1 text-center mb-2">
                  Create Account
                </h2>
                <p className='text-center'>to continue your interview preparation</p>

                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label className="form-label">
                      Name
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="mb-3">
                    <label className="form-label">
                      Email
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter email"
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label">
                      Password
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>

                  <div className="text-center my-4">

                    <p className="head1">or continue with</p>
                    <div className="icons text-center">
                      <button className="google-btn btn w-40 mb-2">
                        <i className="bi bi-google me-2"></i>
                        Google
                      </button>

                      <button className="btn btn-outline-primary w-40">
                        <i className="bi bi-linkedin me-2"></i>
                        LinkedIn
                      </button>
                    </div>

                  </div>

                  <div className="text-center">
                    <button className='btn btns btn-outline-light width-100'>Register</button>
                  </div>
                  <div className="text-center text-muted">Already have an account? <Link to="/login">Login</Link></div>
                  <p className='text-center mt-2 text-muted'>By registering, you agree to our Terms and Policies </p>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
