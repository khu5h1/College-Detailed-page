import React from 'react'
import img1 from "./img1.jpg";
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

function AboutUs() {
    return (
        <div>
            <Grid container style={{marginTop:"10vh"}}>
            <Grid item xs>
        <img src={img1} style={{height:"60vh", width:"60wh"}}/>
        <Grid item>
        <Typography variant="h4" gutterBottom>
            About Us
        </Typography>
        </Grid>
        <Grid item>
        <Typography variant="h5" gutterBottom>
        
"To take  College to such a level that, it is at par with the leading institutions of the world in providing leadership to the international education system and be amongst the top rated institutions of the world by providing a transformative education to create leaders and innovators embedded in traditional Indian values."
      </Typography>
      </Grid>
      </Grid>
      </Grid>
        </div>
    )
}

export default AboutUs
