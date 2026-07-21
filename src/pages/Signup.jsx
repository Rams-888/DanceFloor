import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";

function Signup() {

    const navigate = useNavigate();

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

            const response = await fetch(`${API_URL}/api/users/signup`, {

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

                navigate("/login");

            }

        }

        catch (error) {

            console.error(error);

            alert("Unable to connect to server");

        }

    };

    return (

        <div
            className="container-fluid d-flex justify-content-center align-items-center bg-light"
            style={{ minHeight: "100vh" }}
        >

            <div className="row w-100 justify-content-center">

                <div className="col-md-8 col-lg-6">

                    <div className="card shadow-lg border-0 rounded-4">

                        <div className="card-body p-5">

                            <div className="text-center mb-4">

                                <h2 className="fw-bold text-warning">
                                    Dance Floor Academy
                                </h2>

                                <p className="text-muted">
                                    Create Your Account
                                </p>

                            </div>

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
                                            placeholder="Enter First Name"
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
                                            placeholder="Enter Last Name"
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
                                        placeholder="Enter Email"
                                        required
                                    />

                                </div>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Mobile Number

                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="mobile"
                                        value={formData.mobile}
                                        onChange={handleChange}
                                        placeholder="Enter Mobile Number"
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
                                            placeholder="Enter Password"
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
                                            placeholder="Confirm Password"
                                            required
                                        />

                                        <button
                                            type="button"
                                            className="btn btn-outline-secondary"
                                            onClick={() =>
                                                setShowConfirmPassword(!showConfirmPassword)
                                            }
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

                                        I agree to the{" "}

                                        <Link
                                            to="/terms-conditions"
                                            className="text-decoration-none"
                                        >
                                            Terms & Conditions
                                        </Link>

                                        {" "}and{" "}

                                        <Link
                                            to="/privacy-policy"
                                            className="text-decoration-none"
                                        >
                                            Privacy Policy
                                        </Link>

                                    </label>

                                </div>

                                <button
                                    type="submit"
                                    className="btn btn-warning w-100"
                                >

                                    Create Account

                                </button>

                            </form>

                            <div className="text-center mt-4">

                                <p className="mb-0">

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

        </div>

    );

}

export default Signup;