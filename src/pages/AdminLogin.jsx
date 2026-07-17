import { useState } from "react";
import { useNavigate } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function AdminLogin() {

    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleSubmit = async (event) => {

        event.preventDefault();

        if (email === "" || password === "") {

            alert("Please fill all fields.");

            return;

        }

        try {

            const response = await fetch("http://localhost:5000/api/admin/login", {

                method: "POST",

                headers: {

                    "Content-Type": "application/json"

                },

                body: JSON.stringify({

                    email,
                    password

                })

            });

            const data = await response.json();

            if (data.success) {

                localStorage.setItem("admin", JSON.stringify(data.admin));

                alert(data.message);

                navigate("/admin/dashboard");

            } else {

                alert(data.message);

            }

        } catch (error) {

            alert("Server Error");

            console.log(error);

        }

    };

    return (

        <>

            <Navbar />

            {/* Hero Section */}

            <section className="bg-dark text-white py-5">

                <div className="container text-center">

                    <h1 className="display-3">

                        Admin Login

                    </h1>

                    <p className="lead">

                        Welcome Administrator

                    </p>

                </div>

            </section>

            {/* Login Form */}

            <section className="container my-5">

                <div className="row justify-content-center">

                    <div className="col-lg-6">

                        <div className="card shadow-lg">

                            <div className="card-body p-5">

                                <h2 className="text-center mb-4">

                                    Administrator Login

                                </h2>

                                <form onSubmit={handleSubmit}>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Email

                                        </label>

                                        <input

                                            type="email"

                                            className="form-control"

                                            placeholder="Enter Admin Email"

                                            value={email}

                                            onChange={(e) => setEmail(e.target.value)}

                                            required

                                        />

                                    </div>

                                    <div className="mb-3">

                                        <label className="form-label">

                                            Password

                                        </label>

                                        <div className="input-group">

                                            <input

                                                type={showPassword ? "text" : "password"}

                                                className="form-control"

                                                placeholder="Enter Password"

                                                value={password}

                                                onChange={(e) => setPassword(e.target.value)}

                                                required

                                            />

                                            <button

                                                type="button"

                                                className="btn btn-outline-secondary"

                                                onClick={() => setShowPassword(!showPassword)}

                                            >

                                                {showPassword ? "Hide" : "Show"}

                                            </button>

                                        </div>

                                    </div>

                                    <button

                                        type="submit"

                                        className="btn btn-danger w-100"

                                    >

                                        Login

                                    </button>

                                </form>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Admin Information */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h2>

                            Administrator Access

                        </h2>

                        <p>

                            This page is restricted to authorized administrators only.

                        </p>

                        <p>

                            Manage students, courses, sessions, enquiries, and applications from the admin dashboard.

                        </p>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default AdminLogin;