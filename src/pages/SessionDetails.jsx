import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function SessionDetails() {

    return (

        <>

            <Navbar />

            {/* Hero Section */}

            <section className="bg-dark text-white py-5">

                <div className="container text-center">

                    <h1 className="display-3 fw-bold">

                        Session Details

                    </h1>

                    <p className="lead">

                        Explore our dance sessions, timings and instructors.

                    </p>

                </div>

            </section>

            {/* Session Overview */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Session Overview

                        </h2>

                        <p>

                            Dance Floor Academy offers professionally
                            designed dance sessions for beginners,
                            intermediate and advanced students. Every
                            session includes warm-up exercises, practical
                            dance training and performance preparation.

                        </p>

                    </div>

                </div>

            </section>

            {/* Weekly Sessions */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Weekly Session Schedule

                        </h2>

                        <table className="table table-striped table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Day</th>

                                    <th>Dance Style</th>

                                    <th>Instructor</th>

                                    <th>Time</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Monday</td>

                                    <td>Hip-Hop</td>

                                    <td>Alex Johnson</td>

                                    <td>5:00 PM - 6:30 PM</td>

                                </tr>

                                <tr>

                                    <td>Tuesday</td>

                                    <td>Contemporary</td>

                                    <td>Sophia Grace</td>

                                    <td>5:00 PM - 6:30 PM</td>

                                </tr>

                                <tr>

                                    <td>Wednesday</td>

                                    <td>Bharatanatyam</td>

                                    <td>Priya Sharma</td>

                                    <td>4:00 PM - 6:00 PM</td>

                                </tr>

                                <tr>

                                    <td>Thursday</td>

                                    <td>Salsa</td>

                                    <td>Alex Johnson</td>

                                    <td>6:00 PM - 7:30 PM</td>

                                </tr>

                                <tr>

                                    <td>Friday</td>

                                    <td>Freestyle</td>

                                    <td>Sophia Grace</td>

                                    <td>5:00 PM - 6:30 PM</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>

            {/* Session Highlights */}

            <section className="container my-5">

                <div className="row">

                    <div className="col-md-4 mb-4">

                        <div className="card shadow text-center h-100">

                            <div className="card-body">

                                <h1>💃</h1>

                                <h4>

                                    Practical Training

                                </h4>

                                <p>

                                    Hands-on dance practice with
                                    professional guidance.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow text-center h-100">

                            <div className="card-body">

                                <h1>🎵</h1>

                                <h4>

                                    Music Practice

                                </h4>

                                <p>

                                    Practice routines with
                                    professional audio equipment.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow text-center h-100">

                            <div className="card-body">

                                <h1>🎭</h1>

                                <h4>

                                    Stage Preparation

                                </h4>

                                <p>

                                    Improve confidence through
                                    stage performance practice.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>
                        {/* Session Rules */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Session Rules

                        </h2>

                        <ul className="list-group">

                            <li className="list-group-item">

                                ✅ Arrive at least 15 minutes before class.

                            </li>

                            <li className="list-group-item">

                                ✅ Wear comfortable dance attire and proper footwear.

                            </li>

                            <li className="list-group-item">

                                ✅ Bring a water bottle and towel.

                            </li>

                            <li className="list-group-item">

                                ✅ Follow instructor guidelines during practice.

                            </li>

                            <li className="list-group-item">

                                ✅ Respect fellow students and academy property.

                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Batch Information */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Batch Information

                        </h2>

                        <table className="table table-bordered table-hover">

                            <thead className="table-dark">

                                <tr>

                                    <th>Batch</th>

                                    <th>Time</th>

                                    <th>Age Group</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>Morning</td>

                                    <td>7:00 AM - 9:00 AM</td>

                                    <td>Kids & Adults</td>

                                </tr>

                                <tr>

                                    <td>Afternoon</td>

                                    <td>2:00 PM - 4:00 PM</td>

                                    <td>Beginners</td>

                                </tr>

                                <tr>

                                    <td>Evening</td>

                                    <td>5:00 PM - 7:30 PM</td>

                                    <td>Intermediate & Advanced</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>

            {/* Upcoming Workshops */}

            <section className="container my-5">

                <h2 className="text-center mb-5">

                    Upcoming Workshops

                </h2>

                <div className="row">

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100 text-center">

                            <div className="card-body">

                                <h1>🎤</h1>

                                <h4>Hip-Hop Masterclass</h4>

                                <p>

                                    Learn advanced choreography from
                                    guest instructors.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100 text-center">

                            <div className="card-body">

                                <h1>💃</h1>

                                <h4>Classical Workshop</h4>

                                <p>

                                    Improve your Bharatanatyam
                                    techniques and expressions.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100 text-center">

                            <div className="card-body">

                                <h1>🏆</h1>

                                <h4>Competition Training</h4>

                                <p>

                                    Special preparation sessions for
                                    upcoming dance competitions.

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

                            Need More Information?

                        </h2>

                        <p>

                            Contact us for batch availability and session details.

                        </p>

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

export default SessionDetails;