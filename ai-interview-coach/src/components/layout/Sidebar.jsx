import { Link } from "react-router-dom";

function Sidebar() {
  return (
    <div
      className="sidebar-nav text-white p-3"  style={{ minHeight: "100vh" }}>
      <div className="sidebar-brand">
      <div>
      <h4 className="sidebar-brand-text mb-4">AI Coach</h4>
      <h4 className="sidebar-brand-sub mb-4">Interview Prep</h4>
      </div>
    </div>
      <ul className="list-unstyled">
        <li className="mb-3 nav-label">
          <Link
            to="/dashboard"
            className="text-white text-decoration-none"
          >
            Dashboard
          </Link>
        </li>

        <li className="mb-3 nav-label">
          <Link
            to="/"
            className="text-white text-decoration-none"
          >
            History
          </Link>
        </li>

        <li className="mb-3 nav-label">
          <Link
            to="/profile"
            className="text-white text-decoration-none"
          >
            Profile
          </Link>
        </li>

        <li className="nav-label">
          <Link
            to="/"
            className="text-white text-decoration-none"
            >
              Logout
          </Link>
        </li>
      </ul>

     <div className="sidebar-foot">
        <div className="streak-card">
          <div style={{ fontSize: "20px" }}>🔥</div>
          <div className="num">5-day streak</div>
          <div className="lbl">Practice today to keep it going</div>
        </div>
        <div className="user-row">
          <div className="user-avatar">DS</div>
          <div>
            <div className="uname">Logout</div>
            <div className="urole">Free plan</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;