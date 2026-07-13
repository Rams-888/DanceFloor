function Testimonials() {

    const testimonials = [

        {
            name: "Ananya",
            review:
                "The trainers are amazing. I gained confidence and learned professional dance techniques.",
            rating: "⭐⭐⭐⭐⭐"
        },

        {
            name: "Rahul",
            review:
                "Friendly atmosphere, excellent training and many opportunities to perform.",
            rating: "⭐⭐⭐⭐⭐"
        },

        {
            name: "Sneha",
            review:
                "I joined as a beginner and now I perform confidently on stage.",
            rating: "⭐⭐⭐⭐⭐"
        }

    ];

    return (

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Student Testimonials

            </h2>

            <div className="row">

                {

                    testimonials.map((student, index) => (

                        <div
                            className="col-md-4 mb-4"
                            key={index}
                        >

                            <div className="card h-100 shadow">

                                <div className="card-body">

                                    <h4 className="text-warning">

                                        {student.rating}

                                    </h4>

                                    <p className="mt-3">

                                        "{student.review}"

                                    </p>

                                    <h5 className="mt-4 text-end">

                                        — {student.name}

                                    </h5>

                                </div>

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Testimonials;