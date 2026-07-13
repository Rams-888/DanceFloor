function Achievements() {

    const achievements = [

        {
            number: "1500+",
            title: "Students",
            color: "primary"
        },

        {
            number: "50+",
            title: "Awards",
            color: "success"
        },

        {
            number: "15+",
            title: "Years",
            color: "danger"
        },

        {
            number: "300+",
            title: "Performances",
            color: "warning"
        }

    ];

    return (

        <section className="container my-5">

            <div className="card shadow-lg">

                <div className="card-body p-5">

                    <h2 className="text-center mb-5">

                        Our Achievements

                    </h2>

                    <div className="row text-center">

                        {

                            achievements.map((item, index) => (

                                <div
                                    className="col-md-3 mb-4"
                                    key={index}
                                >

                                    <h1 className={`text-${item.color} fw-bold display-4`}>

                                        {item.number}

                                    </h1>

                                    <h5>

                                        {item.title}

                                    </h5>

                                </div>

                            ))

                        }

                    </div>

                </div>

            </div>

        </section>

    );

}

export default Achievements;