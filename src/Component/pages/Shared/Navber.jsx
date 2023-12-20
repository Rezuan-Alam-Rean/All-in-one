// import { useContext } from "react";
// import { NavLink } from "react-router-dom";
// // import { AuthContext } from "../../Provider/AuthProvider";
// import Swal from "sweetalert2";
// import { AuthContext } from "../../../Provider/AuthProvider";
// import logop from "../../../assets/img/logop.png"


// const Navber = () => {
//   const { user, logout } = useContext(AuthContext);


//   const handleLogOut = () => {
//     logout()
//       .then(() => {
//         Swal.fire({
//           title: 'success!',
//           text: 'Logout Succesfull',
//           icon: 'success',
//           confirmButtonText: 'Ok'
//         })
//       })
//       .catch((error) => {
//         console.log(error.message);
//       });
//   };

//   const navOptions = <>

//     <li>
//       <NavLink
//         to="/"
//         className={({ isActive, isPending }) =>
//           isPending ? "pending" : isActive ? "text-orange-300" : "text-orange-300"
//         }
//       >
//         Home
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/Projects"
//         className={({ isActive, isPending }) =>
//           isPending ? "pending" : isActive ? "text-orange-300" : "text-orange-300"
//         }
//       >
//         Projects
//       </NavLink>
//     </li>
//     <li>
//       <NavLink
//         to="/"
//         className={({ isActive, isPending }) =>
//           isPending ? "pending" : isActive ? "text-orange-300" : "text-orange-300"
//         }
//       >
//         Arts
//       </NavLink>
//     </li>

    
//   </>


//   return (
//     <div>
//       <div className="  navbar fixed top-0 z-10  bg-gray-400 rounded-md bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10  max-w-screen-xl text-white">
//         <div className="navbar-start">
//           <div className="dropdown">
//             <label tabIndex={0} className="btn btn-outline lg:hidden">
//               <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
//             </label>
//             <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 ">

//               {navOptions}
//             </ul>
//           </div>
//           <img className="h-12 w-12 hidden lg:flex " src={logop} alt="" />
//         </div>

//         <div className="navbar-center block text-center">
//           <div className="flex flex-col items-center">
//             <img className="h-8 w-8 lg:hidden" src="https://i.ibb.co/rbcbjCS/Untitled-design-12.png" alt="" />
//             <p className="text-lg  font-serif">Jannatul Ferdaus  Putul</p>
//             <p className="text-sm text-orange-300 font-serif">Architects & Engineers</p>
//           </div>
//         </div>

//         <div className="navbar-end  ml-8">
//           <ul className=" mx-5 gap-5  px-1 hidden lg:flex ">


//             {navOptions}

//           </ul>

//           <ul className="menu flex-wrap-reverse  menu-horizontal px-1 gap-3 items-center ">

//             {user ?

//               <button className="">

//                 <NavLink
//                   onClick={handleLogOut}
//                   className={({ isActive, isPending }) =>
//                     isPending ? "pending" : isActive ? "" : "text-orange-300"
//                   }
//                 >
//                   Logout
//                 </NavLink>

//               </button>
//               :
//               <button className="">
//                 <NavLink
//                   to="/Login"
//                   className={({ isActive, isPending }) =>
//                     isPending ? "pending" : isActive ? "" : "text-orange-300"
//                   }
//                 >
//                   Login
//                 </NavLink>
//               </button>


//             }

//             <label className=" mr-5">
//               {user && <div className="tooltip tooltip-bottom" data-tip={user?.displayName}>
//                 <img style={{ width: "50px" }} className="w-50 rounded-full circle ml-6" src={user?.photoURL} />
//               </div>}
//             </label>
//           </ul>

//         </div>
//       </div>
//     </div>
//   );
// };

// export default Navber;



































