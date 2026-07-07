import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import { loginUser } from "../../services/authService";

function Login() {
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await loginUser({
        email,
        password,
      });
      console.log(data);
      localStorage.setItem("token", data.token);
      navigate('/dashboard', {
        state: {
          name: data.user.name,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Navbar />
      <div className="container-fluid">
        <div
          className="row justify-content-center"
          style={{ minHeight: "91vh" }}
        >
          {/* Left Column (Future Hero Section) */}
          <div className="left-hero-section col-lg-6 d-none d-lg-flex align-items-center">
            <div className="hero-content">
              <h2 className="">
                Be Ready for your Next Interview.
              </h2>
              <p>
                Interactive Practice sessions 
              </p>
              <p>Know about your weakness</p>
              <p></p>

             <div className="hero-stats">
                <span>4,208 mock interviews run this week</span>
                <span>92% felt more prepared</span>
              </div>
              </div>
          </div>
           
          {/* Right Column (Login Form) */}
          <div className="col-lg-6 d-flex justify-content-center align-items-center">
            <div className="col-md-8 col-xl-7">
              <div className="mb-3 login-card card shadow border-0">
                <div className="card-body p-5">
                  {/* Heading */}
                  <h2 className="head1 text-center mb-2">
                    Welcome Back 
                  </h2>
                  <p className="text-center text-muted mb-4">
                    Sign in to continue your interview preparation.
                  </p>
                  {/* Login Form */}
                  <form onSubmit={handleSubmit}>
                    {/* Email */}
                    <div className="mb-3">
                      <label className="form-label">
                        Email
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {/* Password */}
                    <div className="mb-3">
                      <label className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <div className="d-flex justify-content-end mb-3 mt-3">
                      <Link to="/forgot-password" className="head1">
                        Forgot Password?
                      </Link>
                    </div>
                    <button type="submit"className="btn btns w-100 mt-3">Login</button>
                  </form>
                  <p className="text-center mt-4 mb-0">
                    Don't have an account?{" "}
                    <Link to="/register" className="head1">Register</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;