import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import logo from "../assets/logo.png";

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

    return (

        <div className="auth-page">

            <div className="auth-card">

                <div className="text-center mb-4">

                    <img
                        src={logo}
                        alt="Dance Floor Logo"
                        width="80"
                        className="mb-3"
                    />

                    <h1 className="auth-title">

                        Welcome Back

                    </h1>

                    <p className="auth-subtitle">

                        Sign in to continue your dance journey.

                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">

                            Email

                        </label>

                        <input
    type="email"
    className="form-control py-3"
    placeholder="Enter your email"
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
    className="form-control py-3"
    placeholder="Enter your password"
    value={password}
    onChange={(e) => setPassword(e.target.value)}
    required
/>

                            <button

                                type="button"
                                className="btn btn-warning"
                                onClick={() => setShowPassword(!showPassword)}

                            >

                                {showPassword ? "Hide" : "Show"}

                            </button>

                        </div>

                    </div>

                    <div className="form-check mb-4">

                        <input
                            type="checkbox"
                            className="form-check-input"
                            id="remember"
                        />

                        <label
                            htmlFor="remember"
                            className="form-check-label text-white"
                        >

                            Remember Me

                        </label>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-warning w-100 py-3"
                    >

                        Login

                    </button>

                </form>

                <div className="d-flex justify-content-between mt-4">

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

    );

}

export default Login;