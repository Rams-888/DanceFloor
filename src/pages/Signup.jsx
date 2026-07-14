import { useState } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Signup() {

    const [formData, setFormData] = useState({

        firstName: "",
        lastName: "",
        email: "",
        mobile: "",
        password: "",
        confirmPassword: ""

    });

    const [showPassword, setShowPassword] = useState(false);

    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleChange = (event) => {

    setFormData({

        ...formData,

        [event.target.name]: event.target.value

    });

};

    const handleSubmit = async (e) => {

    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {

        alert("Passwords do not match!");
        return;

    }

    try {

        const response = await fetch("http://localhost:5000/api/users/signup", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name: `${formData.firstName} ${formData.lastName}`,

                email: formData.email,

                mobile: formData.mobile,

                password: formData.password

            })

        });

        const data = await response.json();

        alert(data.message);

        if (response.ok) {

            setFormData({

                firstName: "",

                lastName: "",

                email: "",

                mobile: "",

                password: "",

                confirmPassword: ""

            });

        }

    }

    catch (error) {

        console.error(error);

        alert("Unable to connect to server");

    }

};

    return(

        <>

        <Navbar/>

        {/* Hero */}

        <section className="bg-dark text-white py-5">

            <div className="container text-center">

                <h1 className="display-3">

                    Create Account

                </h1>

                <p className="lead">

                    Join Dance Floor Academy Today

                </p>

            </div>

        </section>

        {/* Signup Form */}

        <section className="container my-5">

            <div className="row justify-content-center">

                <div className="col-lg-7">

                    <div className="card shadow-lg">

                        <div className="card-body p-5">

                            <h2 className="text-center mb-4">

                                Student Registration

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="row">

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">

                                            First Name

                                        </label>

                                        <input

                                            type="text"

                                            className="form-control"

                                            name="firstName"

                                            value={formData.firstName}

                                            onChange={handleChange}

                                            required

                                        />

                                    </div>

                                    <div className="col-md-6 mb-3">

                                        <label className="form-label">

                                            Last Name

                                        </label>

                                        <input

                                            type="text"

                                            className="form-control"

                                            name="lastName"

                                            value={formData.lastName}

                                            onChange={handleChange}

                                            required

                                        />

                                    </div>

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Email

                                    </label>

                                    <input

                                        type="email"

                                        className="form-control"

                                        name="email"

                                        value={formData.email}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Phone Number

                                    </label>

                                    <input

                                        type="tel"

                                        className="form-control"

                                        name="mobile"

                                        value={formData.mobile}

                                        onChange={handleChange}

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

                                            name="password"

                                            value={formData.password}

                                            onChange={handleChange}

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

                                <div className="mb-3">

                                    <label className="form-label">

                                        Confirm Password

                                    </label>

                                    <div className="input-group">

                                        <input

                                            type={showConfirmPassword ? "text" : "password"}

                                            className="form-control"

                                            name="confirmPassword"

                                            value={formData.confirmPassword}

                                            onChange={handleChange}

                                            required

                                        />

                                        <button

                                            type="button"

                                            className="btn btn-outline-secondary"

                                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}

                                        >

                                            {showConfirmPassword ? "Hide" : "Show"}

                                        </button>

                                    </div>

                                </div>
                                                                <div className="form-check mb-4">

                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        id="terms"
                                        required
                                    />

                                    <label
                                        className="form-check-label"
                                        htmlFor="terms"
                                    >

                                        I agree to the Terms & Conditions
                                        and Privacy Policy.

                                    </label>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning w-100 btn-lg"
                                >

                                    Create Account

                                </button>

                            </form>

                            <div className="text-center mt-4">

                                <p>

                                    Already have an account?

                                    <Link
                                        to="/login"
                                        className="text-decoration-none ms-2"
                                    >

                                        Login

                                    </Link>

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* Benefits */}

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Benefits of Joining

            </h2>

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>🎓</h1>

                            <h4>

                                Professional Training

                            </h4>

                            <p>

                                Learn from experienced instructors with
                                structured training programs.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>🏆</h1>

                            <h4>

                                Competitions

                            </h4>

                            <p>

                                Participate in state and national dance
                                competitions to showcase your talent.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>🎭</h1>

                            <h4>

                                Stage Performances

                            </h4>

                            <p>

                                Build confidence through live performances,
                                workshops and cultural events.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* Contact */}

        <section className="container my-5">

            <div className="card shadow">

                <div className="card-body text-center">

                    <h2>

                        Need Assistance?

                    </h2>

                    <p>

                        📞 +91 9876543210

                    </p>

                    <p>

                        ✉ info@danceflooracademy.com

                    </p>

                    <p>

                        📍 Anna Nagar, Chennai

                    </p>

                </div>

            </div>

        </section>

        <Footer />

        </>

    );

}

export default Signup;