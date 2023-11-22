

const Banner = () => {
    return (
        <div> 
            <div className="  bg-gradient-to-r from-emerald-950 to-emerald-50 py-16 px-4  mb-10 ">
                <div>
                    <div className="   flex flex-col lg:flex-row items-center justify-between " >
                        <div

                            className="  lg:w-1/2 overflow-x-hidden">
                            <h1 className="text-4xl  font-extrabold text-white  md:text-6xl">
                                Hi <br /> I am Jannatul Ferdaus Putul
                            </h1>
                            <p className="mt-3   text-xl text-white ">
                            “Architecture should speak of its time and place, but yearn for timelessness.”
                            </p>
                        </div>
                        <img
                            className="  w-72 lg:w-96   mt-10 lg:mt-0"
                            src="https://i.ibb.co/Lp0LRKr/20230702-153533-removebg.png"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner


// https://i.ibb.co/RD78Tqn/Untitled-design-16.png