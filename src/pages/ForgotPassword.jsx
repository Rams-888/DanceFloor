import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function ForgotPassword() {

    const [email, setEmail] = useState("");

    const [phone, setPhone] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        alert("Password Reset Link Sent Successfully!");

        setEmail("");

        setPhone("");

    };

    return(

        <>

        <Navbar/>

        {/* Hero */}

        <section className="bg-dark text-white py-5">

            <div className="container text-center">

                <h1 className="display-3">

                    Forgot Password

                </h1>

                <p className="lead">

                    Recover your account in a few simple steps.

                </p>

            </div>

        </section>

        {/* Reset Form */}

        <section className="container my-5">

            <div className="row justify-content-center">

                <div className="col-lg-6">

                    <div className="card shadow-lg">

                        <div className="card-body p-5">

                            <h2 className="text-center mb-4">

                                Reset Password

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Registered Email

                                    </label>

                                    <input

                                        type="email"

                                        className="form-control"

                                        value={email}

                                        onChange={(e)=>setEmail(e.target.value)}

                                        placeholder="Enter Registered Email"

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

                                        value={phone}

                                        onChange={(e)=>setPhone(e.target.value)}

                                        placeholder="Enter Phone Number"

                                        required

                                    />

                                </div>

                                <button

                                    type="submit"

                                    className="btn btn-warning w-100 btn-lg"

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

        </section>
                {/* Password Recovery Tips */}

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Password Recovery Tips

            </h2>

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>📧</h1>

                            <h4>Email Verification</h4>

                            <p>

                                Use the email address that you registered
                                with while creating your account.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>📱</h1>

                            <h4>Phone Verification</h4>

                            <p>

                                Enter your registered mobile number to
                                verify your identity.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>🔒</h1>

                            <h4>Secure Password</h4>

                            <p>

                                Create a strong password with letters,
                                numbers and special characters.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* Security Information */}

        <section className="container my-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="text-center mb-4">

                        Security Information

                    </h2>

                    <ul className="list-group">

                        <li className="list-group-item">

                            ✅ Never share your password with anyone.

                        </li>

                        <li className="list-group-item">

                            ✅ Always log out after using a public computer.

                        </li>

                        <li className="list-group-item">

                            ✅ Use a unique password for your academy account.

                        </li>

                        <li className="list-group-item">

                            ✅ Update your password regularly for better security.

                        </li>

                    </ul>

                </div>

            </div>

        </section>

        {/* Contact Support */}

        <section className="container my-5">

            <div className="card shadow">

                <div className="card-body text-center">

                    <h2>

                        Need More Help?

                    </h2>

                    <p>

                        If you're still unable to access your account,
                        contact our support team.

                    </p>

                    <p>

                        📞 +91 9876543210

                    </p>

                    <p>

                        ✉ support@danceflooracademy.com

                    </p>

                    <p>

                        📍 Anna Nagar, Chennai

                    </p>

                </div>

            </div>

        </section>

        <Footer/>

        </>

    );

}

export default ForgotPassword;