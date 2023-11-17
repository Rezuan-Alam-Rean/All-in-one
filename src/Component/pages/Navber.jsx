import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import Swal from "sweetalert2";


const Navber = () => {
  const { user, logout } = useContext(AuthContext);




  const handleLogOut = () => {
    logout()
      .then(() => {
        Swal.fire({
          title: 'success!',
          text: 'Logout Succesfull',
          icon: 'success',
          confirmButtonText: 'Ok'
        })
      })
      .catch((error) => {
        console.log(error.message);
      });
  };


  return (
    <div>
      <div className="  navbar  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-outline lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-emerald-50 rounded-box w-52">
              
              <li>

                

                  <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending" : isActive ? "text-emerald-950" : ""
                    }
                  >
                    Home
                  </NavLink>

               

              </li>
              <li><a>Item 3</a></li>
            </ul>
          </div>
          <img className="h-12 w-12 hidden lg:flex " src="https://i.ibb.co/rbcbjCS/Untitled-design-12.png" alt="" />
        </div>

        <div className="navbar-center block text-center">
          <div className="flex flex-col items-center">
            <img className="h-8 w-8 lg:hidden" src="https://i.ibb.co/rbcbjCS/Untitled-design-12.png" alt="" />
            <p className="text-lg text-emerald-950 font-serif">Jannatul Ferdaus  Putul</p>
            <p className="text-sm text-gray-800 font-serif">Architects & Engineers</p>
          </div>
        </div>

        <div className="navbar-end  ml-8">
          <ul className="menu menu-horizontal px-1 hidden lg:flex ">
            

            <li>

             

                <NavLink
                  to="/"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "text-emerald-950" : ""
                  }
                >
                  Home
                </NavLink>

            

            </li>

            <li><a>Item 3</a></li>
          </ul>

          <ul className="menu flex-wrap-reverse  menu-horizontal px-1 gap-3 items-center ">



            {user ?

              <button className="btn btn-outline">

                <NavLink
                  onClick={handleLogOut}
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "" : ""
                  }
                >
                  Logout
                </NavLink>

              </button>
              :
              <button className="btn btn-outline">
                <NavLink
                  to="/Login"
                  className={({ isActive, isPending }) =>
                    isPending ? "pending" : isActive ? "" : ""
                  }
                >
                  Login
                </NavLink>
              </button>

            }

            <label className=" mr-5">
              {user && <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
                <img style={{ width: "50px" }} className="w-50 rounded-full circle ml-6" src={user?.photoURL} />
              </div>}
            </label>






          </ul>


        </div>
      </div>
    </div>
  );
};

export default Navber;


