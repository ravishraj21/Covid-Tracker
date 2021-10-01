import React from "react";
import {Container} from '@material-ui/core';
import useStyles from './styles';
import {Grid,Card, CardContent,Typography} from '@material-ui/core';
import github from './../../assets/github.svg'
import linkdin from './../../assets/linkedin.svg'
import instagram from './../../assets/instagram.svg'

const Footer = () => {
	const classes = useStyles();
	return (
        <div>
            <Grid container spacing={4} direction="row" alignItems="center" justify="center"  >
                <Grid item xs={3} sm={1}>  
                    <a href="https://github.com/ravishraj21">
                        <img className={classes.image} src={github} alt="CovidInfo" height="40"></img>
                    </a>
                </Grid>
                <Grid item xs={3} sm={1}> 
                    <a href ="https://www.linkedin.com/in/ravish-raj-tiwary-9356831ba/">
                        <img className={classes.image} src={linkdin}  alt="CovidInfo" height="40"></img>
                    </a>
                </Grid>
                <Grid item xs={3} sm={1}>  
                    <a href="https://www.instagram.com/ravishraj21/">
                            <img className={classes.image} src={instagram} alt="CovidInfo" height="40"></img>
                    </a>
                </Grid>
                {/* <Grid item xs={12} sm={12}> 
                <Typography className={classes.black1}> &copy; Handcrafted by Ravish Raj  </Typography>
                </Grid> */}
              
                {/* <Grid item xs={12} sm={4}> 
                    <a href="https://github.com/kumarajay0412/Covid-Info">
                        <Typography className={classes.black2}> Feel free to collaborate on Github</Typography>
                    </a>
                </Grid> */}

            </Grid>
            <br></br><br></br>
            <Grid item xs={12} sm={11}> 
                <Typography className={classes.black1}>&copy; Handcrafted by Ravish Raj </Typography>
                </Grid>
        </div>
	)
}

export default Footer;