import { Link } from "react-router-dom";
function AboutPreview() {
    return (

        <section className="container my-5">

            <div className="card shadow-lg">

                <div className="card-body p-5">

                    <h2 className="text-center mb-4">

                        About Dance Floor Academy

                    </h2>

                    <p className="text-center lead">

                        Dance Floor Academy is one of the leading dance
                        institutions dedicated to nurturing talent,
                        creativity, confidence and discipline.

                    </p>

                    <p className="text-center">

                        Our mission is to help every student discover
                        their unique dance style through professional
                        training, competitions, workshops and stage
                        performances.

                    </p>

                    <div className="text-center mt-4">

                        <Link
    to="/about"
    className="btn btn-warning btn-lg"
>
    Learn More
</Link>

                    </div>

                </div>

            </div>

        </section>

    );
}

export default AboutPreview;