import React from "react";
import HomePageContainer from "./HomePageContainer.js";
import HeaderBar from "./HeaderBar.js";
import styles from "./HomePageStyle.js";
import classNames from "classnames";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import img from "./img.jpg";
import ContactUs from "./ContactUs.js";
import Alumni from "./Alumni.js";
import Achievements from "./Achievements.js";
import AboutUs from "./AboutUs.js";
import Box from '@material-ui/core/Box';
const gridStyles = {
  grid: {
    width: "auto",
  },
};
const gridItemStyles = {
  grid: {
    position: "relative",
    width: "100%",
    minHeight: "1px",
    paddingRight: "15px",
    flexBasis: "auto",
  },
};
const useStyles = makeStyles(styles);
const useGridStyles = makeStyles(gridStyles);
const useGridItemStyles = makeStyles(gridItemStyles);

function HomePage() {
  const gridclasses = useGridStyles();
  const griditemclasses = useGridItemStyles();
  const classes = useStyles();
  const contactref = React.useRef(null);
  const achievementsref = React.useRef(null);
const alumniref = React.useRef(null);
const aboutusref = React.useRef(null);
  const handleContact = () => {
    contactref.current.scrollIntoView({
      behavior: "smooth",
    });
  };
  const handleAchievements = () => { achievementsref.current.scrollIntoView({
    behavior: "smooth",
  });}
const handleAlumni = () => { alumniref.current.scrollIntoView({
  behavior: "smooth",
});}
const handleAboutUs = () => { aboutusref.current.scrollIntoView({
  behavior: "smooth",
});}
  
  
  return (
    <div>
      <HomePageContainer>
      <Grid container >
        <Grid item xs={12}>
        <img src={img} style={{width: "80vw", height:"100vh", marginTop:"0vh", marginLeft:"8vw"}}/>
    </Grid>
    </Grid>
    {/* Contact us, about us, achievements, aluminus, Apply */}
        <div className={classes.container}>
          <Grid container className={gridclasses.grid}>
            <Grid item className={griditemclasses.grid}>
            </Grid>
          </Grid>
        </div>
      </HomePageContainer>
      <div className={classNames(classes.main, classes.mainRaised)}>
        <HeaderBar sticky handleContact={handleContact} handleAchievements={handleAchievements} handleAlumni={handleAlumni} handleAboutUs={handleAboutUs}/>
        <Grid ref={achievementsref}>
        <Achievements  />
        </Grid>
        <div ref={alumniref}>
        <Grid
  container
  direction="row"
  justify="center"
  alignItems="center"
  style={{ marginTop:"10vh"}}
  
>
      <Grid item md={4}>
        <Alumni />
        </Grid>
        <Grid item md={4}>

        <Alumni />
        </Grid>
        <Grid item md={4}>
        <Alumni />
        </Grid>
        </Grid>
        </div>
        <Box ref={aboutusref}>
        <AboutUs  />
        </Box>
        <Box>
        <Grid
          container
          direction="row"
          justify="center"
          alignItems="center"
          style={{marginTop:"5vh"}}
        >
          <Grid item xs={11}>
          <div ref={contactref} key={1}>
        <ContactUs />
        </div>
        </Grid>
        </Grid>
        </Box>
  
      </div>
    </div>
  );
}

export default HomePage;
