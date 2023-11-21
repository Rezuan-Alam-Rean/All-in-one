import { Outlet } from "react-router-dom";
import Navber from "../pages/Shared/Navber";



const MainLayout = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
          
        </div>
    );
};

export default MainLayout;