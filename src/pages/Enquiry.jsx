import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Enquiry() {

    const [formData, setFormData] = useState({

        name: "",
        email: "",
        phone: "",
        subject: "",
        message: ""

    });

    const handleChange = (event) => {

        setFormData({

            ...formData,

            [event.target.name]: event.target.value

        });

    };

    const handleSubmit = (event) => {

        event.preventDefault();

        alert("Your enquiry has been submitted successfully!");

        setFormData({

            name: "",
            email: "",
            phone: "",
            subject: "",
            message: ""

        });

    };

    return(

        <>

        <Navbar/>

        {/* Hero */}

        <section className="bg-dark text-white py-5">

            <div className="container text-center">

                <h1 className="display-3 fw-bold">

                    Enquiry

                </h1>

                <p className="lead">

                    We'd love to answer your questions.

                </p>

            </div>

        </section>

        {/* Enquiry Form */}

        <section className="container my-5">

            <div className="row justify-content-center">

                <div className="col-lg-8">

                    <div className="card shadow-lg">

                        <div className="card-body p-5">

                            <h2 className="text-center mb-4">

                                Send an Enquiry

                            </h2>

                            <form onSubmit={handleSubmit}>

                                <div className="mb-3">

                                    <label className="form-label">

                                        Full Name

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="name"

                                        value={formData.name}

                                        onChange={handleChange}

                                        required

                                    />

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

                                <div className="mb-3">

                                    <label className="form-label">

                                        Subject

                                    </label>

                                    <input

                                        type="text"

                                        className="form-control"

                                        name="subject"

                                        value={formData.subject}

                                        onChange={handleChange}

                                        required

                                    />

                                </div>

                                <div className="mb-4">

                                    <label className="form-label">

                                        Message

                                    </label>

                                    <textarea

                                        className="form-control"

                                        rows="5"

                                        name="message"

                                        value={formData.message}

                                        onChange={handleChange}

                                        placeholder="Write your enquiry..."

                                        required

                                    ></textarea>

                                </div>

                                <button

                                    type="submit"

                                    className="btn btn-warning btn-lg w-100"

                                >

                                    Submit Enquiry

                                </button>

                            </form>

                        </div>

                    </div>

                </div>

            </div>

        </section>
                {/* Contact Information */}

        <section className="container my-5">

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow text-center h-100">

                        <div className="card-body">

                            <h1>📍</h1>

                            <h4>Address</h4>

                            <p>

                                Dance Floor Academy<br />

                                Anna Nagar,<br />

                                Chennai,<br />

                                Tamil Nadu

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow text-center h-100">

                        <div className="card-body">

                            <h1>📞</h1>

                            <h4>Phone</h4>

                            <p>

                                +91 9876543210

                            </p>

                            <p>

                                +91 9123456789

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow text-center h-100">

                        <div className="card-body">

                            <h1>✉</h1>

                            <h4>Email</h4>

                            <p>

                                info@danceflooracademy.com

                            </p>

                            <p>

                                support@danceflooracademy.com

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* Why Choose Us */}

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Why Choose Dance Floor Academy?

            </h2>

            <div className="row">

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>👨‍🏫</h1>

                            <h4>Expert Trainers</h4>

                            <p>

                                Learn from highly experienced
                                professional instructors.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>🏆</h1>

                            <h4>Competitions</h4>

                            <p>

                                Participate in district, state
                                and national level competitions.

                            </p>

                        </div>

                    </div>

                </div>

                <div className="col-md-4 mb-4">

                    <div className="card shadow h-100 text-center">

                        <div className="card-body">

                            <h1>🎭</h1>

                            <h4>Stage Performances</h4>

                            <p>

                                Showcase your talent through
                                regular live performances.

                            </p>

                        </div>

                    </div>

                </div>

            </div>

        </section>

        {/* Office Hours */}

        <section className="container my-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="text-center mb-4">

                        Office Hours

                    </h2>

                    <table className="table table-bordered text-center">

                        <thead className="table-dark">

                            <tr>

                                <th>Day</th>

                                <th>Time</th>

                            </tr>

                        </thead>

                        <tbody>

                            <tr>

                                <td>Monday - Friday</td>

                                <td>9:00 AM - 8:00 PM</td>

                            </tr>

                            <tr>

                                <td>Saturday</td>

                                <td>9:00 AM - 6:00 PM</td>

                            </tr>

                            <tr>

                                <td>Sunday</td>

                                <td>10:00 AM - 2:00 PM</td>

                            </tr>

                        </tbody>

                    </table>

                </div>

            </div>

        </section>

        {/* Google Map */}

        <section className="container my-5">

            <div className="card shadow">

                <div className="card-body">

                    <h2 className="text-center mb-4">

                        Visit Us

                    </h2>

                    <div className="ratio ratio-16x9">

                        <iframe

                            src="https://www.google.com/maps?q=Anna+Nagar+Chennai&output=embed"

                            title="Dance Floor Academy"

                            loading="lazy"

                            allowFullScreen

                        ></iframe>

                    </div>

                </div>

            </div>

        </section>

        <Footer />

        </>

    );

}

export default Enquiry;