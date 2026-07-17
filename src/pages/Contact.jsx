import { useState } from "react";
import { API_URL } from "../config";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
    const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
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

const handleSubmit = async (event) => {

    event.preventDefault();

    try {

        const response = await fetch("${API_URL}/api/enquiries", {

            method: "POST",

            headers: {

                "Content-Type": "application/json"

            },

            body: JSON.stringify({

                name: `${formData.firstName} ${formData.lastName}`,
                email: formData.email,
                mobile: formData.phone,
                subject: formData.subject,
                message: formData.message

            })

        });

        const data = await response.json();

        alert(data.message);

        setFormData({

            firstName: "",
            lastName: "",
            email: "",
            phone: "",
            subject: "",
            message: ""

        });

    }

    catch (error) {

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

                        Contact Us

                    </h1>

                    <p className="lead">

                        We'd love to hear from you.

                    </p>

                </div>

            </section>

            {/* Contact Information */}

            <section className="container my-5">

                <div className="row">

                    <div className="col-lg-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h1>📍</h1>

                                <h4>

                                    Address

                                </h4>

                                <p>

                                    Dance Floor Academy

                                    <br />

                                    Anna Nagar

                                    <br />

                                    Chennai

                                    <br />

                                    Tamil Nadu

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h1>📞</h1>

                                <h4>

                                    Phone

                                </h4>

                                <p>

                                    +91 9876543210

                                </p>

                                <p>

                                    +91 9123456789

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-lg-4 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body text-center">

                                <h1>✉</h1>

                                <h4>

                                    Email

                                </h4>

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

            {/* Contact Form */}

            <section className="container my-5">

                <div className="card shadow-lg">

                    <div className="card-body p-5">

                        <h2 className="text-center mb-4">

                            Send Us a Message

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

                                    Phone

                                </label>

                                <input
                                    type="tel"
                                    className="form-control"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter Phone Number"
                                />

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
                                    placeholder="Subject"
                                />

                            </div>

                            <div className="mb-3">

                                <label className="form-label">

                                    Message

                                </label>

                                <textarea
                                   rows="5"
                                   className="form-control"
                                   name="message"
                                   value={formData.message}
                                   onChange={handleChange}
                                   placeholder="Write your message"
                                   required
                                ></textarea>

                            </div>

                            <button className="btn btn-warning btn-lg">

                                Send Message

                            </button>

                        </form>

                    </div>

                </div>

            </section>
                        {/* Google Map */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Find Us

                        </h2>

                        <div className="ratio ratio-16x9">

                            <iframe
                                src="https://www.google.com/maps?q=Anna+Nagar+Chennai&output=embed"
                                title="Dance Floor Academy Location"
                                allowFullScreen
                                loading="lazy"
                            ></iframe>

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

                                    <th>Timing</th>

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

            {/* Follow Us */}

            <section className="container my-5">

                <h2 className="text-center mb-5">

                    Follow Us

                </h2>

                <div className="row">

                    <div className="col-md-3 mb-4">

                        <div className="card text-center shadow h-100">

                            <div className="card-body">

                                <h1>📘</h1>

                                <h4>Facebook</h4>

                                <p>Dance Floor Academy</p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center shadow h-100">

                            <div className="card-body">

                                <h1>📸</h1>

                                <h4>Instagram</h4>

                                <p>@danceflooracademy</p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center shadow h-100">

                            <div className="card-body">

                                <h1>▶</h1>

                                <h4>YouTube</h4>

                                <p>Dance Floor Academy</p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center shadow h-100">

                            <div className="card-body">

                                <h1>💼</h1>

                                <h4>LinkedIn</h4>

                                <p>Dance Floor Academy</p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* FAQ */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Frequently Asked Questions

                        </h2>

                        <div className="accordion" id="contactFAQ">

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq1"
                                    >

                                        Do you offer trial classes?

                                    </button>

                                </h2>

                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#contactFAQ"
                                >

                                    <div className="accordion-body">

                                        Yes, every new student can attend
                                        one free trial class.

                                    </div>

                                </div>

                            </div>

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button collapsed"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq2"
                                    >

                                        What is the minimum age?

                                    </button>

                                </h2>

                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#contactFAQ"
                                >

                                    <div className="accordion-body">

                                        Children aged 4 years and above
                                        can join.

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default Contact;