import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Privacy() {

    return (

        <>

            <Navbar />

            {/* Hero Section */}

            <section className="bg-dark text-white py-5">

                <div className="container text-center">

                    <h1 className="display-3 fw-bold">

                        Privacy Policy

                    </h1>

                    <p className="lead">

                        Your privacy and personal information are important to us.

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

                            Dance Floor Academy is committed to protecting
                            your privacy. This Privacy Policy explains how
                            we collect, use and protect your personal
                            information when you use our website or enroll
                            in our academy.

                        </p>

                    </div>

                </div>

            </section>

            {/* Information We Collect */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Information We Collect

                        </h2>

                        <ul className="list-group">

                            <li className="list-group-item">

                                Full Name

                            </li>

                            <li className="list-group-item">

                                Email Address

                            </li>

                            <li className="list-group-item">

                                Phone Number

                            </li>

                            <li className="list-group-item">

                                Address

                            </li>

                            <li className="list-group-item">

                                Course & Batch Details

                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* How We Use Your Information */}

            <section className="container my-5">

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h3>

                                    📚 Student Management

                                </h3>

                                <p>

                                    We use your information for
                                    registrations, attendance,
                                    communication and student records.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h3>

                                    📧 Communication

                                </h3>

                                <p>

                                    We send updates regarding classes,
                                    events, competitions and important
                                    academy announcements.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Data Protection */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Data Protection

                        </h2>

                        <p>

                            We use appropriate security measures to
                            safeguard your personal information against
                            unauthorized access, misuse or disclosure.

                        </p>

                    </div>

                </div>

            </section>
                        {/* Cookies Policy */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Cookies Policy

                        </h2>

                        <p>

                            Our website may use cookies to improve your
                            browsing experience, remember your preferences,
                            and analyze website traffic.

                        </p>

                    </div>

                </div>

            </section>

            {/* Third Party Services */}

            <section className="container my-5">

                <div className="row">

                    <div className="col-md-6 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h3>

                                    🌐 Third-Party Services

                                </h3>

                                <p>

                                    We may use trusted third-party
                                    services such as Google Maps,
                                    Email services and analytics to
                                    improve our website experience.

                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="col-md-6 mb-4">

                        <div className="card shadow h-100">

                            <div className="card-body">

                                <h3>

                                    🔐 Secure Transactions

                                </h3>

                                <p>

                                    Any online payment or registration
                                    information is handled securely using
                                    industry-standard security practices.

                                </p>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Your Rights */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Your Rights

                        </h2>

                        <ul className="list-group">

                            <li className="list-group-item">

                                ✅ Access your personal information.

                            </li>

                            <li className="list-group-item">

                                ✅ Request corrections to your information.

                            </li>

                            <li className="list-group-item">

                                ✅ Request deletion of your account data.

                            </li>

                            <li className="list-group-item">

                                ✅ Contact us regarding privacy concerns.

                            </li>

                        </ul>

                    </div>

                </div>

            </section>

            {/* Policy Updates */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body">

                        <h2>

                            Policy Updates

                        </h2>

                        <p>

                            This Privacy Policy may be updated from time
                            to time. Any changes will be published on
                            this page with the latest revision date.

                        </p>

                    </div>

                </div>

            </section>

            {/* Contact */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h2>

                            Contact Us

                        </h2>

                        <p>

                            If you have any questions about our Privacy
                            Policy, please contact us.

                        </p>

                        <p>

                            📞 +91 9876543210

                        </p>

                        <p>

                            ✉ privacy@danceflooracademy.com

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

export default Privacy;