import { useEffect, useState } from "react";
import ProjectCart from "./ProjectCart";
import Grid from '@mui/material/Grid';

const Project = () => {

    const [projects, setProject] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/projects")
            .then(res => res.json())
            .then(data => setProject(data));
    }, [])

    console.log(projects);

    return (
        <div className="mt-4 mb-4   ">
            <div className="text-center">
                <h3 className="text-2xl font-bold text-orange-600">Projects</h3>
                {/* <h2 className="text-5xl">Our Projects Area</h2>
                <p>the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which do not look even slightly believable. </p> */}
            </div>

            <Grid container spacing={2}>
                {projects.map(project => (
                    <ProjectCart key={project._id} project={project} />
                ))}
            </Grid>
        </div>
    );
};

export default Project;
