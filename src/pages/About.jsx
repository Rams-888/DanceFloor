import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import trainer1 from "../assets/images/men.jpg";
import trainer2 from "../assets/images/women1.jpg";
import trainer3 from "../assets/images/women2.jpg";
import aboutBg from "../assets/images/about-bg.png";

function About() {

    return (

        <>

            <Navbar />

            {/* Hero Section */}

            <section
    className="text-white d-flex align-items-center"
    style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(${aboutBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        minHeight: "60vh"
    }}
>
    <div className="container text-center">

        <h1 className="display-2 fw-bold">
            About Dance Floor Academy
        </h1>

        <p className="lead mt-4">
            Empowering dancers with passion, creativity and excellence.
        </p>

    </div>
</section>

            {/* Our Story */}

            <section className="container my-5">

                <div className="card shadow-lg">

                    <div className="card-body p-5">

                        <h2 className="text-center mb-4">

                            Our Story

                        </h2>

                        <p>

                            Dance Floor Academy was established with the
                            vision of creating a professional platform
                            where aspiring dancers can develop their
                            talent through structured training and
                            inspiring performances.

                        </p>

                        <p>

                            We have trained hundreds of students while
                            building confidence, discipline, teamwork
                            and stage presence.

                        </p>

                    </div>

                </div>

            </section>

            {/* Mission & Vision */}

            <section className="container my-5">

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <div className="card h-100 shadow">

                            <div className="card-body">

                                <h2 className="text-center">

                                    🎯 Mission

                                </h2>

                                <p>

                                    To provide quality dance education
                                    through experienced trainers,
                                    innovative choreography and
                                    performance opportunities.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="card h-100 shadow">

                            <div className="card-body">

                                <h2 className="text-center">

                                    🌍 Vision

                                </h2>

                                <p>

                                    To become one of India's most
                                    respected dance academies by
                                    promoting creativity, confidence
                                    and artistic excellence.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Core Values */}

            <section className="container my-5">

                <h2 className="text-center mb-5">

                    Our Core Values

                </h2>

                <div className="row">

                    <div className="col-md-3 mb-4">

                        <div className="card text-center h-100 shadow">

                            <div className="card-body">

                                <h1>💃</h1>

                                <h4>Passion</h4>

                                <p>

                                    Dance with heart and dedication.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center h-100 shadow">

                            <div className="card-body">

                                <h1>⭐</h1>

                                <h4>Excellence</h4>

                                <p>

                                    Professional quality training.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center h-100 shadow">

                            <div className="card-body">

                                <h1>🤝</h1>

                                <h4>Teamwork</h4>

                                <p>

                                    Building friendships through dance.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-3 mb-4">

                        <div className="card text-center h-100 shadow">

                            <div className="card-body">

                                <h1>🎭</h1>

                                <h4>Creativity</h4>

                                <p>

                                    Every performance tells a story.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Journey */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Our Journey

                        </h2>

                        <table className="table table-striped">

                            <thead className="table-dark">

                                <tr>

                                    <th>Year</th>

                                    <th>Achievement</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>2015</td>

                                    <td>Academy Established</td>

                                </tr>

                                <tr>

                                    <td>2018</td>

                                    <td>500+ Students</td>

                                </tr>

                                <tr>

                                    <td>2021</td>

                                    <td>State Dance Championship</td>

                                </tr>

                                <tr>

                                    <td>2025</td>

                                    <td>1500+ Students Trained</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>
                        {/* Facilities */}

            <section className="container my-5">

                <h2 className="text-center mb-5">

                    Our Facilities

                </h2>

                <div className="row">

                    <div className="col-md-4 mb-4">

                        <div className="card h-100 shadow text-center">

                            <div className="card-body">

                                <h1>🏢</h1>

                                <h4>Spacious Studios</h4>

                                <p>

                                    Fully air-conditioned dance studios
                                    with mirrors and wooden flooring.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card h-100 shadow text-center">

                            <div className="card-body">

                                <h1>🎵</h1>

                                <h4>Professional Sound</h4>

                                <p>

                                    High-quality music systems for
                                    professional dance practice.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card h-100 shadow text-center">

                            <div className="card-body">

                                <h1>🚗</h1>

                                <h4>Parking</h4>

                                <p>

                                    Safe parking facility for students
                                    and parents.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Dance Programs */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Dance Programs

                        </h2>

                        <div className="row">

                            <div className="col-md-6">

                                <ul className="list-group">

                                    <li className="list-group-item">Hip-Hop</li>

                                    <li className="list-group-item">Contemporary</li>

                                    <li className="list-group-item">Bharatanatyam</li>

                                    <li className="list-group-item">Western Dance</li>

                                    <li className="list-group-item">Freestyle</li>

                                </ul>

                            </div>

                            <div className="col-md-6">

                                <ul className="list-group">

                                    <li className="list-group-item">Salsa</li>

                                    <li className="list-group-item">Ballet</li>

                                    <li className="list-group-item">Kids Dance</li>

                                    <li className="list-group-item">Fitness Dance</li>

                                    <li className="list-group-item">Wedding Choreography</li>

                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Meet Our Team */}

            <section className="container my-5">

                <h2 className="text-center mb-5">

                    Meet Our Team

                </h2>

                <div className="row">

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <img
                                src={trainer1}
                                alt="Alex Johnson"
                                className="card-img-top"
                                style={{
                                    height: "350px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body text-center">

                                <h4>Alex Johnson</h4>

                                <p className="text-muted">

                                    Hip-Hop Instructor

                                </p>

                                <p>

                                    10+ years of professional
                                    choreography experience.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <img
                                src={trainer2}
                                alt="Sophia Grace"
                                className="card-img-top"
                                style={{
                                    height: "350px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body text-center">

                                <h4>Sophia Grace</h4>

                                <p className="text-muted">

                                    Contemporary Instructor

                                </p>

                                <p>

                                    International performer and
                                    choreography specialist.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-4 mb-4">

                        <div className="card shadow h-100">

                            <img
                                src={trainer3}
                                alt="Priya Sharma"
                                className="card-img-top"
                                style={{
                                    height: "350px",
                                    objectFit: "cover"
                                }}
                            />

                            <div className="card-body text-center">

                                <h4>Priya Sharma</h4>

                                <p className="text-muted">

                                    Classical Instructor

                                </p>

                                <p>

                                    Bharatanatyam expert with
                                    15 years of teaching experience.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Awards */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2 className="text-center mb-4">

                            Awards & Recognition

                        </h2>

                        <table className="table table-bordered">

                            <thead className="table-dark">

                                <tr>

                                    <th>Year</th>

                                    <th>Award</th>

                                </tr>

                            </thead>

                            <tbody>

                                <tr>

                                    <td>2018</td>

                                    <td>Best Dance Academy</td>

                                </tr>

                                <tr>

                                    <td>2020</td>

                                    <td>State Cultural Excellence</td>

                                </tr>

                                <tr>

                                    <td>2023</td>

                                    <td>National Dance Championship</td>

                                </tr>

                                <tr>

                                    <td>2025</td>

                                    <td>Outstanding Training Institute</td>

                                </tr>

                            </tbody>

                        </table>

                    </div>

                </div>

            </section>

            {/* Call To Action */}

            <section className="container my-5">

                <div className="card bg-dark text-white shadow">

                    <div className="card-body text-center p-5">

                        <h2>

                            Start Your Dance Journey Today!

                        </h2>

                        <p className="lead">

                            Join Dance Floor Academy and learn
                            from professional instructors.

                        </p>

                        <Link
    to="/application"
    className="btn btn-warning btn-lg"
>
    Apply Now
</Link>

                    </div>

                </div>

            </section>

            <Footer />

        </>

    );

}

export default About;