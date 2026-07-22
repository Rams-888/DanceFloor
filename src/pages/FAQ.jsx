import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import aboutBg from "../assets/images/about-bg.png";
function FAQ() {

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
            Frequently Asked Questions
        </h1>

        <p className="lead mt-4">
            Find answers to the questions our students ask most often.
        </p>

    </div>
</section>

            {/* FAQ Accordion */}

            <section className="container my-5">

                <div className="card shadow-lg">

                    <div className="card-body">

                        <div className="accordion" id="faqAccordion">

                            {/* FAQ 1 */}

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq1"
                                    >

                                        What is the minimum age to join?

                                    </button>

                                </h2>

                                <div
                                    id="faq1"
                                    className="accordion-collapse collapse show"
                                    data-bs-parent="#faqAccordion"
                                >

                                    <div className="accordion-body">

                                        Students aged 4 years and above
                                        can enroll in our dance programs.

                                    </div>

                                </div>

                            </div>

                            {/* FAQ 2 */}

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq2"
                                    >

                                        Do you offer free trial classes?

                                    </button>

                                </h2>

                                <div
                                    id="faq2"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >

                                    <div className="accordion-body">

                                        Yes. Every new student is eligible
                                        for one free trial class.

                                    </div>

                                </div>

                            </div>

                            {/* FAQ 3 */}

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq3"
                                    >

                                        Which dance styles do you teach?

                                    </button>

                                </h2>

                                <div
                                    id="faq3"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >

                                    <div className="accordion-body">

                                        Hip-Hop, Contemporary,
                                        Bharatanatyam, Salsa,
                                        Freestyle, Ballet,
                                        Kids Dance and Wedding Choreography.

                                    </div>

                                </div>

                            </div>

                            {/* FAQ 4 */}

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq4"
                                    >

                                        Are certificates provided?

                                    </button>

                                </h2>

                                <div
                                    id="faq4"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >

                                    <div className="accordion-body">

                                        Yes. Students receive certificates
                                        after successfully completing
                                        their course.

                                    </div>

                                </div>

                            </div>
                                                        {/* FAQ 5 */}

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq5"
                                    >

                                        What are the class timings?

                                    </button>

                                </h2>

                                <div
                                    id="faq5"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >

                                    <div className="accordion-body">

                                        We offer Morning, Afternoon and
                                        Evening batches for different age
                                        groups.

                                    </div>

                                </div>

                            </div>

                            {/* FAQ 6 */}

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq6"
                                    >

                                        Can I change my batch later?

                                    </button>

                                </h2>

                                <div
                                    id="faq6"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >

                                    <div className="accordion-body">

                                        Yes. Batch changes are allowed
                                        based on seat availability.

                                    </div>

                                </div>

                            </div>

                            {/* FAQ 7 */}

                            <div className="accordion-item">

                                <h2 className="accordion-header">

                                    <button
                                        className="accordion-button collapsed"
                                        type="button"
                                        data-bs-toggle="collapse"
                                        data-bs-target="#faq7"
                                    >

                                        Do you prepare students for competitions?

                                    </button>

                                </h2>

                                <div
                                    id="faq7"
                                    className="accordion-collapse collapse"
                                    data-bs-parent="#faqAccordion"
                                >

                                    <div className="accordion-body">

                                        Yes. Our academy provides special
                                        coaching for district, state and
                                        national dance competitions.

                                    </div>

                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </section>

            {/* Contact Support */}

            <section className="container my-5">

                <div className="card shadow">

                    <div className="card-body text-center">

                        <h2>

                            Still Have Questions?

                        </h2>

                        <p>

                            Our team is happy to help you.

                        </p>

                        <p>

                            📞 +91 9876543210

                        </p>

                        <p>

                            ✉ info@danceflooracademy.com

                        </p>

                    </div>

                </div>

            </section>

            {/* Call To Action */}

            <section className="container my-5">

                <div className="card bg-warning shadow">

                    <div className="card-body text-center p-5">

                        <h2>

                            Ready to Start Dancing?

                        </h2>

                        <p className="lead">

                            Join Dance Floor Academy today and learn
                            from our expert instructors.

                        </p>

                        <Link
    to="/application"
    className="btn btn-dark btn-lg"
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

export default FAQ;