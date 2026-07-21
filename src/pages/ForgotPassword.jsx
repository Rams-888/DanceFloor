import { useState } from "react";
import { Link } from "react-router-dom";

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

        <div
            className="container-fluid d-flex justify-content-center align-items-center bg-light"
            style={{ minHeight: "100vh" }}
        >

            <div className="row w-100 justify-content-center">

                <div className="col-md-6 col-lg-5">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-5">

                            <div className="text-center mb-4">

                                <h2 className="fw-bold text-warning">
                                    Dance Floor Academy
                                </h2>

                                <p className="text-muted">
                                    Forgot your password?
                                </p>

                            </div>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">
                                        Registered Email
                                    </label>

                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Enter Registered Email"
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
                                        className="form-control"
                                        placeholder="Enter Registered Phone Number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        required
                                    />

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning w-100"
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

                </div>

            </div>

        </div>

    );

}

export default ForgotPassword;