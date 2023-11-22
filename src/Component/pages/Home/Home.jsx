
import { Helmet } from "react-helmet-async";
import Banner from "./Banner/Banner";
import Slider from "./Banner/Slider";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Putul || Home</title>

            </Helmet>
            <Slider></Slider>
            <Banner></Banner>

        </div>
    );
};

export default Home;