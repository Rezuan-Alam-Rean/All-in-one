import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber";
import Footer from "../pages/Shared/Footer";



const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
          
        </div>
    );
};

export default MainLayout;