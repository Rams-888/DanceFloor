import { Link } from "react-router-dom";

function Footer() {

    return (

        <footer className="bg-dark text-white mt-5">

            <div className="container py-5">

                <div className="row">

                    {/* Academy */}

                    <div className="col-md-4">

                        <h3 className="text-warning">
                            💃 Dance Floor Academy
                        </h3>

                        <p>
                            Empowering dancers through passion,
                            creativity and excellence.
                        </p>

                    </div>

                    {/* Quick Links */}

                    <div className="col-md-4">

                        <h4>Quick Links</h4>

                        <ul className="list-unstyled">

                            <li>
                                <Link
                                    to="/"
                                    className="text-white text-decoration-none"
                                >
                                    Home
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/about"
                                    className="text-white text-decoration-none"
                                >
                                    About
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/application"
                                    className="text-white text-decoration-none"
                                >
                                    Application
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/contact"
                                    className="text-white text-decoration-none"
                                >
                                    Contact
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/faq"
                                    className="text-white text-decoration-none"
                                >
                                    FAQ
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/privacy"
                                    className="text-white text-decoration-none"
                                >
                                    Privacy Policy
                                </Link>
                            </li>

                            <li>
                                <Link
                                    to="/terms"
                                    className="text-white text-decoration-none"
                                >
                                    Terms & Conditions
                                </Link>
                            </li>

                        </ul>

                    </div>

                    {/* Contact */}

                    <div className="col-md-4">

                        <h4>Contact</h4>

                        <p>📍 Chennai, Tamil Nadu</p>

                        <p>📞 +91 9876543210</p>

                        <p>✉ info@danceflooracademy.com</p>

                    </div>

                </div>

                <hr />

                <div className="text-center">

                    <p>
                        © {new Date().getFullYear()} Dance Floor Academy.
                        All Rights Reserved.
                    </p>

                </div>

            </div>

        </footer>

    );

}

export default Footer;