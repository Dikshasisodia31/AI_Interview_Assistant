import { Link,useNavigate } from "react-router-dom";
import { useState } from "react";
import Navbar from "../../components/layout/Navbar";
import { loginUser } from "../../services/authService";

function Login() {
     const Navigate = useNavigate();
     const handleSubmit = async (e)=>{
       e.preventDefault();
       try{
           const data = await loginUser({
                  email,
                  password,
                  });
                  console.log(data);
                  localStorage.setItem("token",data.token);
                  Navigate('/dashboard',{
                    state : {
                     name : data.user.name,
                    },
                  });
       }catch(error){
          console.log(error);
       }
     };
     const [email,setEmail] = useState("");
     const [password,setPassword] = useState("");
  return (

    // <div>
    //   <Navbar/>
    //   <div className="container-fluid">
    //   <div
    //     className="row justify-content-center align-items-center"
    //     style={{ minHeight: "90vh" }}
    //   >
    //     <div className="col-md-5">
    //       <div className="login-card card shadow border-0">
    //         <div className="card-body p-5">

    //           <h2 className="head1 text-center mb-4">
    //             Welcome Back
    //           </h2>
    //           <p className="text-center text-muted mb-4">
    //             Sign in to continue your interview prepartion
    //           </p>

    //           <form onSubmit={handleSubmit}>
    //             <div className="mb-3">
    //               <label className="form-label">
    //                 Email
    //               </label>

    //               <input
    //                 type="email"
    //                 className="form-control"
    //                 placeholder="Enter email"
    //                 value={email}
    //                 onChange={(e)=>setEmail(e.target.value)}
    //               />
    //             </div>

    //             <div className="mb-4">
    //               <label className="form-label">
    //                 Password
    //               </label>

    //               <input
    //                 type="password"
    //                 className="form-control"
    //                 placeholder="Enter password"
    //                 value={password}
    //                 onChange={(e)=>setPassword(e.target.value)}
    //               />
    //             </div>
    //             <div>
    //               <a href="#" className="head1">Forgot Password?</a>
    //             </div>
    //             <hr></hr>
    //             <button
    //               className="login-btn btn btns w-100"
    //             >
    //               Login
    //             </button>
    //           </form>

    //           <p className="text-center mt-4">
    //             Don't have an account?{" "}
    //             <Link to="/register" className="head1">
    //               Register
    //             </Link>
    //           </p>

    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    // </div>
    <div>
    <Navbar />

    <div className="container-fluid">
      <div
        className="row  justify-content-center"
        style={{ minHeight: "100vh" }}
      >
        {/* Left Column (Future Hero Section) */}
        <div className="left-hero-section col-lg-6 d-none d-lg-flex align-items-center">
        </div>

        {/* Right Column (Login Form) */}
        <div className="col-lg-6 d-flex justify-content-center align-items-center">

          <div className="col-md-8 col-xl-7">
            <div className="mb-3 login-card card shadow border-0">
              <div className="card-body p-5">

                {/* Heading */}
                <h2 className="head1 text-center mb-2">
                  Welcome Back 👋
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

                  {/* Forgot Password */}
                  <div className="d-flex justify-content-end mb-3 mt-3">
                    <Link to="/forgot-password" className="head1">
                      Forgot Password?
                    </Link>
                  </div>

                  {/* Login Button */}
                  <button
                    type="submit"
                    className="btn btns w-100 mt-3"
                  >
                    Login
                  </button>

                </form>

                {/* Register */}
                <p className="text-center mt-4 mb-0">
                  Don't have an account?{" "}
                  <Link to="/register" className="head1">
                    Register
                  </Link>
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