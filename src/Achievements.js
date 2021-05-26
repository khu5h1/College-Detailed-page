import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

import img2 from "./img2.jpg";
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
});

export default function Achievement() {
  const classes = useStyles();

  return (
      <div>
    <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{marginTop:"5vh"}}
  >
          <Grid item xs={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Achievement 1
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  
    <Grid item xs={7}>
     <Typography gutterBottom variant="h6" component="h6">
     Achievement details would be listed here.
     Achievement details would be listed here.
     Achievement details would be listed here.
     Achievement details would be listed here.
   </Typography>
   </Grid>
   </Grid>
   <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{marginTop:"5vh"}}
  >  <Grid item xs={7}>
  <Typography gutterBottom variant="h6" component="h6">
  Achievement details would be listed here.
  Achievement details would be listed here.
  Achievement details would be listed here.
  Achievement details would be listed here.
</Typography>
</Grid>
          <Grid item xs={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Achievement 1
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  
  
   </Grid>
   <Grid
    container
    direction="row"
    justify="center"
    alignItems="center"
    style={{marginTop:"5vh"}}
  >
          <Grid item xs={3}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={img2}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Achievement 1
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    </Grid>
  
    <Grid item xs={7}>
     <Typography gutterBottom variant="h6" component="h6">
     Achievement details would be listed here.
     Achievement details would be listed here.
     Achievement details would be listed here.
     Achievement details would be listed here.
   </Typography>
   </Grid>
   </Grid>
   </div>
  );
}
