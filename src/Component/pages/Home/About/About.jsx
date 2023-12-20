
const About = () => {
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className='lg:w-1/2 relative'>
                    <img src="https://i.ibb.co/NrKTh1z/Untitled-Instagram-Post.png" className="w-3/4 rounded-lg shadow-2xl" />
                    <img src="https://i.ibb.co/wRF4zS4/379560534-849358980169855-7780829300924460302-n.jpg" className="w-2/5 absolute right-5 top-2/3 rounded-lg border-8 border-white shadow-2xl" />
                </div>
                <div className='lg:w-1/2 space-y-5 p-4'>
                    <h3 className=" mt-10 text-3xl font-bold" >Hi  , I am <span className=' text-orange-500 '> Jannatul Ferdaus Putul</span> </h3>
                  
                            <p className="mt-3   text-xl text-white ">
                            “Architecture should speak of its time and place, but yearn for timelessness.”
                            </p>
                    <button className="btn btn-warning">Get More Info</button>
                </div>
            </div>
        </div>
    );
};

export default About;