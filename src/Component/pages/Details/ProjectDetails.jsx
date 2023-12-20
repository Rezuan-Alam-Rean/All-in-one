
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ProjectDetails = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`http://localhost:5000/projects/${id}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setLoader(false);
            });
    }, [id]);

    console.log(data);

    return (
        <>
            {loader ? (
                <div className="flex items-center justify-center h-32">
                    <FaSpinner className="animate-spin text-white text-4xl" />
                </div>
            ) : (
                <div className="mt-28 card lg:card-side bg-base-100 shadow-xl flex">
                <figure className=" lg:w-2/5">
                    <img src={data.project_img} alt="Album" className="w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{data.project_name}</h2>
                    <p>{data.project_type}</p>
                    <p>{data.details}</p>
                    <Link to="/">
                    <button className="btn "> Go to Home</button>
                    
                    </Link>
                </div>
            </div>
            
            )}
        </>
    );
};

export default ProjectDetails;