function WhyChooseUs() {

    const features = [

        {
            icon: "👨‍🏫",
            title: "Expert Trainers",
            description:
                "Learn from certified and experienced dance professionals."
        },

        {
            icon: "🏆",
            title: "Competitions",
            description:
                "Participate in district, state and national level competitions."
        },

        {
            icon: "🎭",
            title: "Stage Shows",
            description:
                "Perform in annual events, cultural festivals and live shows."
        },

        {
            icon: "🎓",
            title: "Certification",
            description:
                "Receive certificates after successful course completion."
        }

    ];

    return (

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Why Choose Dance Floor Academy?

            </h2>

            <div className="row">

                {

                    features.map((feature, index) => (

                        <div
                            className="col-md-3 mb-4"
                            key={index}
                        >

                            <div className="card h-100 shadow text-center">

                                <div className="card-body">

                                    <h1 className="display-4">

                                        {feature.icon}

                                    </h1>

                                    <h4 className="mt-3">

                                        {feature.title}

                                    </h4>

                                    <p className="mt-3">

                                        {feature.description}

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

export default WhyChooseUs;