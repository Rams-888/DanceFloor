import hiphop from "../assets/images/hiphop.jpg";
import contemporary from "../assets/images/contemporary.jpg";
import classical from "../assets/images/classical.jpg";
import salsa from "../assets/images/salsa.jpg";
import freestyle from "../assets/images/freestyle.jpg";
import ballet from "../assets/images/ballet.jpg";

function DanceStyles() {

    const styles = [

        {
            title: "Hip-Hop",
            image: hiphop,
            description:
                "High-energy street dance with freestyle moves and exciting choreography."
        },

        {
            title: "Contemporary",
            image: contemporary,
            description:
                "Express emotions through graceful movements and creative routines."
        },

        {
            title: "Bharatanatyam",
            image: classical,
            description:
                "Traditional Indian classical dance focusing on rhythm and storytelling."
        },

        {
            title: "Salsa",
            image: salsa,
            description:
                "Energetic Latin dance with exciting partner movements and footwork."
        },

        {
            title: "Freestyle",
            image: freestyle,
            description:
                "Create your own dance style while improving confidence and flexibility."
        },

        {
            title: "Ballet",
            image: ballet,
            description:
                "Learn balance, posture, elegance and discipline through ballet."
        }

    ];

    return (

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Our Dance Styles

            </h2>

            <div className="row">

                {

                    styles.map((style, index) => (

                        <div
                            className="col-md-4 mb-4"
                            key={index}
                        >

                            <div className="card h-100 shadow">

                                <img
                                    src={style.image}
                                    alt={style.title}
                                    className="card-img-top"
                                    style={{
                                        height: "250px",
                                        objectFit: "cover"
                                    }}
                                />

                                <div className="card-body">

                                    <h4>

                                        {style.title}

                                    </h4>

                                    <p>

                                        {style.description}

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

export default DanceStyles;