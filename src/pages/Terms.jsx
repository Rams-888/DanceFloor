import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import aboutBg from "../assets/images/about-bg.png";

function Terms() {

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
            Terms & Conditions
        </h1>

        <p className="lead mt-4">
            Please read these terms carefully before using Dance Floor Academy services.
        </p>

    </div>

</section>
            {/* Introduction */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Introduction

                        </h2>

                        <p>

                            By enrolling in Dance Floor Academy or using
                            our website, you agree to follow these
                            Terms and Conditions.

                        </p>

                    </div>

                </div>

            </section>

            {/* Student Responsibilities */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Student Responsibilities

                        </h2>

                        <ul className="list-group">

                            <li className="list-group-item">

                                Attend classes regularly.

                            </li>

                            <li className="list-group-item">

                                Respect instructors and fellow students.

                            </li>

                            <li className="list-group-item">

                                Follow academy rules and dress code.

                            </li>

                            <li className="list-group-item">

                                Maintain discipline during classes.

                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Fees & Payments */}

            <section className="container my-5">

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h3>

                                    💳 Fee Payment

                                </h3>

                                <p>

                                    Course fees should be paid on or before
                                    the due date to avoid interruptions.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h3>

                                    💰 Refund Policy

                                </h3>

                                <p>

                                    Fees paid are generally non-refundable
                                    except under approved exceptional cases.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Attendance */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Attendance Policy

                        </h2>

                        <p>

                            Students are expected to maintain regular
                            attendance. Continuous absence without prior
                            notice may result in suspension from classes.

                        </p>

                    </div>

                </div>

            </section>
                        {/* Code of Conduct */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Code of Conduct

                        </h2>

                        <ul className="list-group">

                            <li className="list-group-item">

                                ✅ Treat instructors and fellow students with respect.

                            </li>

                            <li className="list-group-item">

                                ✅ Maintain discipline inside the academy.

                            </li>

                            <li className="list-group-item">

                                ✅ Use academy equipment responsibly.

                            </li>

                            <li className="list-group-item">

                                ✅ Follow all safety instructions during classes.

                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Intellectual Property */}

            <section className="container my-5">

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h3>

                                    📚 Learning Materials

                                </h3>

                                <p>

                                    All course materials, choreography,
                                    videos and academy resources remain
                                    the intellectual property of Dance
                                    Floor Academy.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h3>

                                    🎥 Photography & Media

                                </h3>

                                <p>

                                    Photos and videos captured during
                                    academy events may be used for
                                    promotional purposes unless otherwise
                                    requested by the student.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Limitation of Liability */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Limitation of Liability

                        </h2>

                        <p>

                            Dance Floor Academy is not responsible for
                            personal belongings lost or damaged on the
                            premises. Students participate in dance
                            activities at their own responsibility and
                            should follow all safety guidelines provided
                            by instructors.

                        </p>

                    </div>

                </div>

            </section>

            {/* Changes to Terms */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Changes to These Terms

                        </h2>

                        <p>

                            Dance Floor Academy reserves the right to
                            update or modify these Terms & Conditions at
                            any time. Updated versions will be published
                            on this page.

                        </p>

                    </div>

                </div>

            </section>

            {/* Contact Information */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h2>

                            Contact Us

                        </h2>

                        <p>

                            If you have any questions regarding these
                            Terms & Conditions, please contact us.

                        </p>

                        <p>

                            📞 +91 9876543210

                        </p>

                        <p>

                            ✉ legal@danceflooracademy.com

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

export default Terms;