
import { Helmet } from "react-helmet-async";
// import Banner from "./Banner/Banner";

import About from "./About/About";
import Project from "./Project/Project";
import Education from "./Education/Education";
import Slider from "./Banner/Slider";
import Arts from "./Arts/Arts";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Putul || Home</title>

            </Helmet>
           *<Slider/>
            <About></About>
            <Education/>
            <Project></Project>
            <Arts/>
            {/* <Banner></Banner> */}

        </div>
    );
};

export default Home;