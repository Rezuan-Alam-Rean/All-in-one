import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import {  CardActionArea, CardActions, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const Artscard = (art) => {
    const { _id, art_name, art_img, details, theme } = art.art;
    console.log(art);

    return (
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card className='m-auto' sx={{
                maxWidth: 300,
            }}>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        height="20px" // Fixed height for the image
                        image={art_img}
                        alt="green iguana"
                        sx={{
                            // Fixed width
                            height: 160, // Fixed height
                            objectFit: 'cover', // Maintain aspect ratio
                        }}// Added this to maintain aspect ratio
                    />
                    <CardContent sx={{ height: 140 }}>
                        <Typography gutterBottom variant="h6" component="div">
                            {art_name}
                        </Typography>
                        <Typography gutterBottom variant="h6" component="div">
                            {theme}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                            {details}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Link to={`/aDetails/${_id}`}>
                    <button className='btn btn-sm text-black bg-orange-400'> view Details</button>


                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
};

export default Artscard;
