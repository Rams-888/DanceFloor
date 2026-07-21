import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Login() {

    const [email, setEmail] = useState("");

    const [password, setPassword] = useState("");

    const [showPassword, setShowPassword] = useState(false);


    const navigate = useNavigate();
    const handleSubmit = async (event) => {

    event.preventDefault();

    if (email === "" || password === "") {
        alert("Please fill all fields.");
        return;
    }

    try {

        const response = await fetch(`${API_URL}/api/users/login`, {
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

        if (!response.ok) {
            alert(data.message);
            return;
        }

        alert(data.message);

alert(data.message);

// Save logged-in user
localStorage.setItem("user", JSON.stringify(data.user));
localStorage.setItem("role", data.role);

if (data.role === "admin") {

    navigate("/admin/dashboard");

} else {

    navigate("/student");

}
    } catch (error) {

        console.error(error);
        alert("Server Error");

    }

};
    return(

        <>

        <Navbar/>

        {/* Hero */}

        <section className="bg-dark text-white py-5">

            <div className="container text-center">

                <h1 className="display-3">

                    Login

                </h1>

                <p className="lead">

                    Welcome Back!

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

                                Sign In

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email

                                    </label>

                                    <input

                                        type="email"

                                        className="form-control"

                                        value={email}

                                        onChange={(e)=>setEmail(e.target.value)}

                                        placeholder="Enter Email"

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Password

                                    </label>

                                    <div className="input-group">

                                        <input

                                            type={showPassword ? "text":"password"}

                                            className="form-control"

                                            value={password}

                                            onChange={(e)=>setPassword(e.target.value)}

                                            placeholder="Enter Password"

                                            required

                                        />

                                        <button

                                            type="button"

                                            className="btn btn-outline-secondary"

                                            onClick={()=>setShowPassword(!showPassword)}

                                        >

                                            {showPassword ? "Hide":"Show"}

                                        </button>

                                    </div>

                                </div>

                                <div className="form-check mb-3">

                                    <input

                                        type="checkbox"

                                        className="form-check-input"

                                        id="remember"

                                    />

                                    <label

                                        className="form-check-label"

                                        htmlFor="remember"

                                    >

                                        Remember Me

                                    </label>

                                </div>

                                <button

                                    className="btn btn-warning w-100"

                                    type="submit"

                                >

                                    Login

                                </button>

                            </form>
                                                        <div className="d-flex justify-content-between mt-3">

                                <Link
                                    to="/forgot-password"
                                    className="text-decoration-none"
                                >
                                    Forgot Password?
                                </Link>

                                <Link
                                    to="/signup"
                                    className="text-decoration-none"
                                >
                                    Create Account
                                </Link>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* Why Login */}

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Why Login?

            </h2>

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>📅</h1>

                            <h4>View Schedule</h4>

                            <p>

                                Access your class timings and upcoming sessions.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>🎓</h1>

                            <h4>Track Progress</h4>

                            <p>

                                Monitor your attendance and learning progress.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>🏆</h1>

                            <h4>Competition Updates</h4>

                            <p>

                                Receive notifications about competitions and events.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* Need Help */}

        <section className="container my-5">

            <div className="card shadow">

                <div className="card-body text-center">

                    <h2>

                        Need Help?

                    </h2>

                    <p>

                        If you're having trouble logging in,
                        contact our support team.

                    </p>

                    <p>

                        📞 +91 9876543210

                    </p>

                    <p>

                        ✉ support@danceflooracademy.com

                    </p>

                </div>

            </div>

        </section>

        <Footer/>

        </>

    );

}

export default Login;