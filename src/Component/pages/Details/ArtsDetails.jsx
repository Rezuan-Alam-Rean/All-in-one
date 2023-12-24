
import { FaSpinner } from "react-icons/fa";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const ArtsDetails = () => {
    const { id } = useParams();
    const [loader, setLoader] = useState(true);
    const [data, setData] = useState();

    useEffect(() => {
        fetch(`https://all-in-one-server-site.vercel.app/arts/${id}`)
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
                    <img src={data.art_img} alt="Album" className="w-full" />
                </figure>
                <div className="card-body ">
                    <h2 className="card-title">{data.art_name}</h2>
                    <p>{data.theme}</p>
                    <p>{data.details}</p>
                    <Link to="/">
                    <button className="btn bg-orange-400 text-black "> Go to Home</button>
                    
                    </Link>
                </div>
            </div>
            
            )}
        </>
    );
};

export default ArtsDetails;