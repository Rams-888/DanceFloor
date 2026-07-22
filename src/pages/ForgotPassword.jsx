import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

function ForgotPassword() {

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        alert("Password Reset Link Sent Successfully!");

        setEmail("");
        setPhone("");

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

                        Forgot Password

                    </h1>

                    <p className="auth-subtitle">

                        Enter your registered details to receive a password reset link.

                    </p>

                </div>

                <form onSubmit={handleSubmit}>

                    <div className="mb-3">

                        <label className="form-label">

                            Registered Email

                        </label>

                        <input
                            type="email"
                            className="form-control py-3"
                            placeholder="Enter your registered email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />

                    </div>

                    <div className="mb-4">

                        <label className="form-label">

                            Registered Phone Number

                        </label>

                        <input
                            type="tel"
                            className="form-control py-3"
                            placeholder="Enter your registered phone number"
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            required
                        />

                    </div>

                    <button
                        type="submit"
                        className="btn btn-warning w-100 py-3"
                    >

                        Send Reset Link

                    </button>

                </form>

                <div className="text-center mt-4">

                    <Link
                        to="/login"
                        className="text-decoration-none"
                    >

                        ← Back to Login

                    </Link>

                </div>

            </div>

        </div>

    );

}

export default ForgotPassword;