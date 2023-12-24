import { Link } from "react-router-dom";

const About = () => {
    return (

        <div>

            <p className="text-3xl font-bold text-center text-orange-500 mb-5 mt-10">
                About Me
            </p>
            <h1 className="font-5xl font-poppins font-extrabold border-b-8 border-dimBlue text-white mb-10"></h1>

            <div
                id="about"
                className="xl:mt-12 flex md:flex-row flex-col gap-10 overflow-hidden"
            >
               
                <div className="text-center md:mt-10   mt-1 max-w-xs m-auto">
                    <img className="max-h-80 shadow-md rounded-full w-full" src="https://i.ibb.co/mJ36rSh/Untitled-design-16.png" alt="profile" />

                </div>
                {/* Form */}
                <div className="flex-[0.75] bg-black-100 p-8 rounded-2xl md:w-1/2 my-5">
                    <div className="p-3 leading-6 ">
                    <h3 className=" mb-5 text-black text-3xl font-bold" > <span className=' text-orange-500 '> So</span> , who am I ?</h3>

                        <p className="text-gray-700 font-poppins text-justify ">
                        Hello! I’m Jannatul Ferdaus Putul,   an Architecture student at the prestigious Ahsanullah University of Science and Technology.
                        My portfolio includes a variety of architectural projects and Arts .  I also have a collection of art pieces .

                        I have honed my skills in Adobe Illustrator and Photoshop.

                        I am a dedicated architecture student with a passion for design, a knack for art, and a strong command of essential digital tools. <br /> I am continuously learning and creatively exploring in my journey in the field of architecture. 😊 
                        </p>
                        < Link to="/Contract" >
                            <button className="btn btn-sm text-black bg-orange-400 mt-4 md:mt-6">
                                Contact Me
                            </button>
                        </ Link >
                    </div>
                </div>
            </div>

        </div>
        
    );
};

export default About;