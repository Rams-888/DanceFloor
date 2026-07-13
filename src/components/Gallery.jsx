import gallery1 from "../assets/images/gallery1.jpg";
import gallery2 from "../assets/images/gallery2.jpg";
import gallery3 from "../assets/images/gallery3.jpg";
import gallery4 from "../assets/images/gallery4.jpg";
import gallery5 from "../assets/images/gallery5.jpg";
import gallery6 from "../assets/images/gallery6.jpg";
import gallery7 from "../assets/images/gallery7.jpg";
import gallery8 from "../assets/images/gallery8.jpg";

function Gallery() {

    const images = [

        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6,
        gallery7,
        gallery8

    ];

    return (

        <section className="container my-5">

            <h2 className="text-center mb-5">

                Gallery

            </h2>

            <div className="row">

                {

                    images.map((image, index) => (

                        <div
                            className="col-lg-3 col-md-4 col-sm-6 mb-4"
                            key={index}
                        >

                            <div className="card shadow border-0">

                                <img
                                    src={image}
                                    alt={`Gallery ${index + 1}`}
                                    className="card-img-top"
                                    style={{
                                        height: "250px",
                                        objectFit: "cover"
                                    }}
                                />

                            </div>

                        </div>

                    ))

                }

            </div>

        </section>

    );

}

export default Gallery;