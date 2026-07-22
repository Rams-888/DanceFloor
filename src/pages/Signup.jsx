import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { API_URL } from "../config";
import logo from "../assets/logo.png";

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

                        Create Account

                    </h1>

                    <p className="auth-subtitle">

                        Join Dance Floor Academy and begin your dance journey.

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
                                className="form-control py-3"
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                required
                            />

                        </div>

                        <div className="col-md-6 mb-3">

                            <label className="form-label">

                                Last Name

                            </label>

                            <input
                                type="text"
                                className="form-control py-3"
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
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
                            className="form-control py-3"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
                        />

                    </div>

                    <div className="mb-3">

                        <label className="form-label">

                            Mobile Number

                        </label>

                        <input
                            type="tel"
                            className="form-control py-3"
                            name="mobile"
                            value={formData.mobile}
                            onChange={handleChange}
                            placeholder="Enter your mobile number"
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
                                name="password"
                                value={formData.password}
                                onChange={handleChange}
                                placeholder="Create Password"
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

                    <div className="mb-3">

                        <label className="form-label">

                            Confirm Password

                        </label>

                        <div className="input-group">

                            <input
                                type={showConfirmPassword ? "text" : "password"}
                                className="form-control py-3"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder="Confirm Password"
                                required
                            />

                            <button
                                type="button"
                                className="btn btn-warning"
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
                            className="form-check-label text-white"
                            htmlFor="terms"
                        >

                            I agree to the{" "}

                            <Link to="/terms">

                                Terms & Conditions

                            </Link>

                            {" "}and{" "}

                            <Link to="/privacy">

                                Privacy Policy

                            </Link>

                        </label>

                    </div>

                    <button
                        type="submit"
                        className="btn btn-warning w-100 py-3"
                    >

                        Create Account

                    </button>

                </form>

                <div className="text-center mt-4">

                    <p className="text-white mb-0">

                        Already have an account?

                        <Link
                            to="/login"
                            className="ms-2"
                        >

                            Login

                        </Link>

                    </p>

                </div>

            </div>

        </div>

    );

}

export default Signup;