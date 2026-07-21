import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import AboutPreview from "../components/AboutPreview";
import DanceStyles from "../components/DanceStyles";
import WhyChooseUs from "../components/WhyChooseUs";
import Trainers from "../components/Trainers";
import Gallery from "../components/Gallery";
import Testimonials from "../components/Testimonials";
import Achievements from "../components/Achievements";
import UpcomingEvents from "../components/UpcomingEvents";
import Footer from "../components/Footer";
import heroDancer from "../assets/images/dance1.png";

function Home() {

    return (

        <>

            <Navbar />

            
            <Hero />

            <AboutPreview />

            <DanceStyles />

            <WhyChooseUs />

            <Trainers />

            <Gallery />

            <Testimonials />

            <Achievements />

            <UpcomingEvents />

            <Footer />

        </>

    );

}

export default Home;