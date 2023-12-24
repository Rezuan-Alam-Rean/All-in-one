import { useEffect, useState } from "react";
import ProjectCart from "./ProjectCart";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Box from '@mui/material/Box';
// import Typography from '@mui/material/Typography';

const Project = () => {
    const [projects, setProject] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        fetch("https://all-in-one-server-site.vercel.app/projects")
            .then(res => res.json())
            .then(data => setProject(data));
    }, [])

    console.log(projects);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="mt-4 ">
            <div className="text-center mt-5 mb-10">
                <h3 className="text-2xl font-bold text-orange-600">Projects</h3>
            </div>

            <Grid container spacing={2} >
                {projects.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(project => (
                    <ProjectCart key={project._id} project={project} />
                ))}
            </Grid>

            <Box display="flex" justifyContent="flex-end" mt={2}>
                {/* <Typography className="text-black" variant="body1" >View More</Typography> */}
                <Pagination count={Math.ceil(projects.length / itemsPerPage)} page={page} onChange={handleChange} />
            </Box>
        </div>
    );
};

export default Project;
