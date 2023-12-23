import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Artscard from "./Artscard";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

const Arts = () => {
    const [arts, setArts] = useState([]);
    const [page, setPage] = useState(1);
    const itemsPerPage = 4;

    useEffect(() => {
        fetch("https://all-in-one-server-site.vercel.app/arts")
            .then(res => res.json())
            .then(data => setArts(data));
    }, [])

    console.log(arts);

    const handleChange = (event, value) => {
        setPage(value);
    };

    return (
        <div className="mt-4 ">
            <div className="text-center mt-5 mb-10">
                <h3 className="text-2xl font-bold text-orange-600">Arts</h3>
            </div>

            <Grid container spacing={2}>
                {arts.slice((page - 1) * itemsPerPage, page * itemsPerPage).map(art => (
                    <Artscard key={art._id} art={art} />
                ))}
            </Grid>

            <Box display="flex" justifyContent="flex-end" mt={2}>
                <Typography variant="body1" >View More</Typography>
                <Pagination count={Math.ceil(arts.length / itemsPerPage)} page={page} onChange={handleChange} />
            </Box>
        </div>
    );
};

export default Arts;
