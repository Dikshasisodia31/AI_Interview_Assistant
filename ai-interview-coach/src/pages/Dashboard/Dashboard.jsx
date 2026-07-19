import Sidebar from "../../components/layout/Sidebar";
import Statcard from "../../common/statcard";
import { Link } from "react-router-dom";
// import { useLocation } from "react-router-dom";

function Dashboard() {

  const interviews = [
    {role : "MERN Developer",status:"IN PROGRESS"},
    {role:"Java Developer",status:"IN PROGRESS"},
    {role:"AI Engineer",status:"IN PROGRESS"},
    {role:"Python Developer",status:"IN PROGRESS"},
    {role:"Backend developer",status:"IN PROGRESS"},
  ];
  //  const location = useLocation();
  return (
    <div className="dash-cont home container-fluid">
      <div className="row">

        {/* Sidebar */}
        <div className="col-md-2 p-0">
          <Sidebar />
        </div>

        {/* Main Content */}
        <div className="col-md-10 p-4">

          <h3 className="eyebrow">
            Welcome Back, 
          </h3>

          {/* <div className="row">
             <div className="col-6">Your account is set-up, let's get interview-ready.</div>
             <div className="col-4">submit </div>
          </div> */}
          <h2 className="heading mb-4 mt-3">
            Your account is set-up, let's get interview-ready.
          </h2>

          
          <p className="text-muted">
            Twelve mock interviews logged so far.<br></br>
            Node.js is holding back your average — a focused round there could lift your score fastest.
          </p>
          

          {/* Stats */}
          <div className="row g-4 mb-4 mt-3">

            <div className="col-md-4">
              <Statcard title="Total Interviews" value="12"/>
            </div>

            <div className="col-md-4">
              <Statcard
                title="Average Score"
                value="78%"
              />
            </div>

            <div className="col-md-4">
              <Statcard 
                title="Weak Topic"
                value="Node.js"
              />
            </div>

          </div>

          {/* Recent Interviews */}
          <div className="card recent-card border-0">

            <div className="card-body">

              <h4 className="heading mb-3" style={{fontSize:"19px"}}>
                Recent Interviews
              </h4>

              <ul className="list-group list-group-flush">

                {interviews.map((iv,i)=>(
                  <li className="list-group-item" key={i}>
                      <span className="role-name">{iv.role}</span>
                      <span className="score-pct">{iv.status}</span>
                  </li>
                ))}
              </ul>

            </div>

          </div>

          <Link to="/interview/setup" className="btn btns btn-outline-light mt-2"> 
            Start New Interview
          </Link>

        </div>

      </div>
    </div>
  );
}

export default Dashboard;