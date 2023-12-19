
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Slider from "./Banner/Slider";
import About from "./About/About";
import Project from "./Project/Project";
import Education from "./Education/Education";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Putul || Home</title>

            </Helmet>
            <Slider></Slider>

            <About></About>
            <Education/>
            <Project></Project>
            <Banner></Banner>

        </div>
    );
};

export default Home;