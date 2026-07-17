import { useState } from "react";
import { API_URL } from "../config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Application() {

    const [formData, setFormData] = useState({

        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        age: "",
        gender: "",
        danceStyle: "",
        batch: "",
        experience: "",
        address: ""

    });

    const handleChange = (event) => {

        setFormData({

            ...formData,

            [event.target.name]: event.target.value

        });

    };
    const handleSubmit = async (event) => {

    event.preventDefault();

    try {

        const response = await fetch(`${API_URL}/api/applications`, {

            method: "POST",

            headers: {

                "Content-Type":"application/json"

            },

            body: JSON.stringify(formData)

        });

        const data = await response.json();

        alert(data.message);

        setFormData({

            firstName:"",
            lastName:"",
            email:"",
            phone:"",
            age:"",
            gender:"",
            danceStyle:"",
            batch:"",
            experience:"",
            address:""

        });

    }

    catch(error){

        alert("Server Error");

    }

};

    return (

        <>

            <Navbar />

            {/* Hero */}

            <section className="bg-dark text-white py-5">

                <div className="container text-center">

                    <h1 className="display-3 fw-bold">

                        Student Application

                    </h1>

                    <p className="lead">

                        Register today and start your dance journey.

                    </p>

                </div>

            </section>

            {/* Application Form */}

            <section className="container my-5">

                <div className="card shadow-lg">

                    <div className="card-body p-5">

                        <h2 className="text-center mb-4">

                            Application Form

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

                            <div className="row">

                                <div className="col-md-6 mb-3">

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

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">

                                        Phone Number

                                    </label>

                                    <input
                                        type="tel"
                                        className="form-control"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                            </div>

                            <div className="row">

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">

                                        Age

                                    </label>

                                    <input
                                        type="number"
                                        className="form-control"
                                        name="age"
                                        value={formData.age}
                                        onChange={handleChange}
                                        required
                                    />

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">

                                        Gender

                                    </label>

                                    <select
                                        className="form-select"
                                        name="gender"
                                        value={formData.gender}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">Select</option>

                                        <option>Male</option>

                                        <option>Female</option>

                                        <option>Other</option>

                                    </select>

                                </div>

                                <div className="col-md-4 mb-3">

                                    <label className="form-label">

                                        Dance Style

                                    </label>

                                    <select
                                        className="form-select"
                                        name="danceStyle"
                                        value={formData.danceStyle}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">Select</option>

                                        <option>Hip-Hop</option>

                                        <option>Contemporary</option>

                                        <option>Bharatanatyam</option>

                                        <option>Salsa</option>

                                        <option>Freestyle</option>

                                        <option>Ballet</option>

                                    </select>

                                </div>

                            </div>
                                                        <div className="row">

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">

                                        Preferred Batch

                                    </label>

                                    <select
                                        className="form-select"
                                        name="batch"
                                        value={formData.batch}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">Select Batch</option>

                                        <option>Morning (7:00 AM - 9:00 AM)</option>

                                        <option>Afternoon (2:00 PM - 4:00 PM)</option>

                                        <option>Evening (5:00 PM - 7:00 PM)</option>

                                    </select>

                                </div>

                                <div className="col-md-6 mb-3">

                                    <label className="form-label">

                                        Previous Experience

                                    </label>

                                    <select
                                        className="form-select"
                                        name="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        required
                                    >

                                        <option value="">Select</option>

                                        <option>Beginner</option>

                                        <option>Intermediate</option>

                                        <option>Advanced</option>

                                    </select>

                                </div>

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Address

                                </label>

                                <textarea
                                    className="form-control"
                                    rows="4"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your address"
                                    required
                                ></textarea>

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

                                    I agree to the academy rules and terms &
                                    conditions.

                                </label>

                            </div>

                            <div className="text-center">

                                <button
                                    type="submit"
                                    className="btn btn-warning btn-lg px-5"
                                >

                                    Submit Application

                                </button>

                            </div>

                        </form>

                    </div>

                </div>

            </section>

            {/* Why Join Us */}

            <section className="container my-5">

                <h2 className="text-center mb-5">

                    Why Join Dance Floor Academy?

                </h2>

                <div className="row">

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center h-100">

                            <div className="card-body">

                                <h1>👨‍🏫</h1>

                                <h4>Expert Trainers</h4>

                                <p>

                                    Learn from experienced professionals.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center h-100">

                            <div className="card-body">

                                <h1>🏆</h1>

                                <h4>Competitions</h4>

                                <p>

                                    Participate in district, state and
                                    national events.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center h-100">

                            <div className="card-body">

                                <h1>🎭</h1>

                                <h4>Live Performances</h4>

                                <p>

                                    Gain stage confidence through regular
                                    performances.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card shadow text-center h-100">

                            <div className="card-body">

                                <h1>🎓</h1>

                                <h4>Certification</h4>

                                <p>

                                    Receive certificates after successful
                                    completion.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Contact Information */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h2>

                            Need Help?

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

export default Application;