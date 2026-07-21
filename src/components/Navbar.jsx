import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";

function Navbar() {

    const navigate = useNavigate();

    const role = localStorage.getItem("role");

    const handleLogout = () => {

        localStorage.clear();

        navigate("/login");

    };

    return (

        <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow">

            <div className="container">

                {/* Logo */}

                <Link
                    to="/"
                    className="navbar-brand"
                >

                    <img
                        src={logo}
                        alt="Dance Floor Logo"
                        className="navbar-logo"
                    />

                    <span className="brand-title">

                        Dance Floor

                    </span>

                </Link>

                {/* Mobile Toggle */}

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNav"
                >

                    <span className="navbar-toggler-icon"></span>

                </button>

                {/* Navigation */}

                <div
                    className="collapse navbar-collapse"
                    id="navbarNav"
                >

                    <ul className="navbar-nav ms-auto align-items-center">

                        <li className="nav-item">

                            <Link className="nav-link" to="/">

                                Home

                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/about">

                                About

                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/application">

                                Application

                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/contact">

                                Contact

                            </Link>

                        </li>

                        <li className="nav-item">

                            <Link className="nav-link" to="/faq">

                                FAQ

                            </Link>

                        </li>

                        {!role ? (

                            <li className="nav-item">

                                <Link className="nav-link" to="/login">

                                    Login

                                </Link>

                            </li>

                        ) : (

                            <>

                                {role === "student" && (

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/student"
                                        >

                                            Student Dashboard

                                        </Link>

                                    </li>

                                )}

                                {role === "admin" && (

                                    <li className="nav-item">

                                        <Link
                                            className="nav-link"
                                            to="/admin/dashboard"
                                        >

                                            Admin Dashboard

                                        </Link>

                                    </li>

                                )}

                                <li className="nav-item ms-2">

                                    <button
                                        className="btn btn-danger"
                                        onClick={handleLogout}
                                    >

                                        Logout

                                    </button>

                                </li>

                            </>

                        )}

                    </ul>

                </div>

            </div>

        </nav>

    );

}

export default Navbar;