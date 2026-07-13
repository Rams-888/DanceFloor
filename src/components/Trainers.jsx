import trainer1 from "../assets/images/men.jpg";
import trainer2 from "../assets/images/women1.jpg";
import trainer3 from "../assets/images/women2.jpg";

function Trainers() {

    const trainers = [

        {
            name: "Alex Johnson",
            role: "Hip-Hop Instructor",
            image: trainer1,
            experience: "10+ years of choreography, stage performances and competitions."
        },

        {
            name: "Sophia Grace",
            role: "Contemporary Instructor",
            image: trainer2,
            experience: "International performer specializing in modern dance techniques."
        },

        {
            name: "Priya Sharma",
            role: "Classical Instructor",
            image: trainer3,
            experience: "15 years of Bharatanatyam teaching and stage experience."
        }

    ];

    return (

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Meet Our Trainers

            </h2>

            <div className="row">

                {

                    trainers.map((trainer, index) => (

                        <div
                            className="col-lg-4 mb-4"
                            key={index}
                        >

                            <div className="card shadow h-100">

                                <img
                                    src={trainer.image}
                                    alt={trainer.name}
                                    className="card-img-top"
                                    style={{
                                        height: "350px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="card-body text-center">

                                    <h4>

                                        {trainer.name}

                                    </h4>

                                    <h6 className="text-muted">

                                        {trainer.role}

                                    </h6>

                                    <p className="mt-3">

                                        {trainer.experience}

                                    </p>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Trainers;