

const Navber = () => {
  return (
    <div>
      <div className="navbar shadow-md bg-white ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
              <li><a>Item 1</a></li>

              <li><a>Item 3</a></li>
            </ul>
          </div>
          <img className="h-12 w-12 hidden lg:flex " src="https://i.ibb.co/N3KmsJs/download.png" alt="" />
        </div>

        <div className="navbar-center block text-center">
  <div className="flex flex-col items-center">
    <img className="h-8 w-8 lg:hidden" src="https://i.ibb.co/N3KmsJs/download.png" alt="" />
    <p className="text-lg text-amber-500 font-serif">JANNATUL FERDAUS PUTUL</p>
    <p className="text-sm text-slate-500 font-serif">Architects & Engineers</p>
  </div>
</div>



        <div className="navbar-end ">

          <ul className="menu menu-horizontal px-1">
            <li><a>Link</a></li>
            <li><a>Link</a></li>


          </ul>

          <ul className="menu menu-horizontal px-1 hidden lg:flex ">
            <li><a>Item 1</a></li>

            <li><a>Item 3</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navber;


<div className="navbar bg-base-100 ">
  <div className="navbar-start flex-1">
    <img className="h-20 w-20  " src="https://i.ibb.co/N3KmsJs/download.png" alt="" />

  </div>


  <div className="navbar-center block">

    <p>Jannatul Ferdaus Putul</p>
    <p>Architects & Engineers</p>
  </div>

  <div className=" navbar-end flex-none">
    <ul className="menu menu-horizontal px-1">
      <li><a>Link</a></li>
      <li><a>Link</a></li>
      <li><a>Link</a></li>

    </ul>
  </div>
</div>
