
import { useEffect, useState } from "react";
import ProjectCart from "./ProjectCart";

const Project = () => {

    const [projects, setProject] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/projects")
            .then(res => res.json())
            .then(data => setProject(data));


    }, [])
    console.log(projects);



    return (

        <div className="mt-4">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Projects</h3>
                <h2 className="text-5xl">Our Projects Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {

                            projects.map(project => <ProjectCart
                            key={project._id}
                            project={project}
                            ></ProjectCart>)
                        }

            </div>

        </div>
    );
};

export default Project;