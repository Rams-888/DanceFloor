import { Link } from "react-router-dom";

function Sidebar() {

    return (

        <div className="bg-dark text-white min-vh-100 p-3">

            <h3 className="text-center mb-4">

                Admin Panel

            </h3>

            <ul className="nav flex-column">

                <li className="nav-item mb-3">
                    <Link className="nav-link text-white" to="/admin/dashboard">
                        Dashboard
                    </Link>
                </li>

                <li className="nav-item mb-3">
                    <Link className="nav-link text-white" to="/admin/students">
                        Students
                    </Link>
                </li>

                <li className="nav-item mb-3">
                    <Link className="nav-link text-white" to="/admin/applications">
                        Applications
                    </Link>
                </li>

                <li className="nav-item mb-3">
                    <Link className="nav-link text-white" to="/admin/enquiries">
                        Enquiries
                    </Link>
                </li>

                <li className="nav-item mb-3">
                    <Link className="nav-link text-white" to="/admin/courses">
                        Courses
                    </Link>
                </li>

                <li className="nav-item mb-3">
                    <Link className="nav-link text-white" to="/admin/sessions">
                        Sessions
                    </Link>
                </li>

                <li className="nav-item mb-3">
                    <Link className="nav-link text-white" to="/admin/profile">
                        Profile
                    </Link>
                </li>

                <li className="nav-item mt-5">
                    <Link className="btn btn-danger w-100" to="/">
                        Logout
                    </Link>
                </li>

            </ul>

        </div>

    );

}

export default Sidebar;