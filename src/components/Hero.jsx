import heroImage from "../assets/images/hero.jpg";
import heroDancer from "../assets/images/dance1.png";

import { Link } from "react-router-dom";

function Hero() {
    

    return (

        <section
            className="text-white d-flex align-items-center"
            style={{
                backgroundImage: `url(${heroImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                minHeight: "90vh"
            }}
        >

            <div className="container">

                <div className="row align-items-center">

                    {/* Left Side */}

                    <div className="col-lg-6">

                        <h1 className="display-2 fw-bold">

                            Dance Floor Academy

                        </h1>

                        <h3 className="mb-4">

                            Where Passion Meets Performance

                        </h3>

                        <p className="lead">

                            Welcome to Dance Floor Academy, where every movement
                            tells a story. Learn from professional instructors,
                            improve your confidence, creativity and stage
                            performance in a fun learning environment.

                        </p>

                        <Link to="/application" className="btn btn-warning btn-lg me-3">
    Join Now
</Link>

<Link to="/about" className="btn btn-outline-light btn-lg">
    Learn More
</Link>

                    </div>

                    {/* Right Side */}

                    <div className="col-lg-6 text-center">

                        <img
                            src={heroDancer}
                            alt="Dance Performer"
                            className="hero-image"
                        />

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Hero;