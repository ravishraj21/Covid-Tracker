import React, {  useState,  useEffect } from 'react';
import useStyles from './styles';
import {Card,CardContent, Typography} from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import death from '../../../../assets/death.svg';
import recovered from '../../../../assets/recovered.svg';
import infected from '../../../../assets/infected.svg';
import {patientData,statepatientData} from '../../../../api/index';
import Districtmap from '../../../districtmap'
import CountTo from 'react-count-to';
// import {state} from '../Statecard/Statecard'

function Districtcard({Sta,Dis,Code}) {

    const [Recoverd, setRecovered] = useState(0);
    const [Infected, setInfected] = useState(0);
    const [Death, setDeath] = useState(0);
    useEffect(() => {
        const fetcher = async()=>{
    //   const fetchedData = await patientData();
    //   const data1 = Object.values(fetchedData);
    //   const data2 = Object.keys(fetchedData);

    //   for (var i=0; i<data1.length; i++) {
    //     // console.log(data2[i],Dis,Code)
    //     if(data2[i].localeCompare(Code)===0){
    //         const statedata=data1[i].districts;
    //         // console.log(statedata)
    //         const data3 = Object.values(statedata);
    //         const data4 = Object.keys(statedata);
    //         // console.log(data3,data4)
    //         if(Dis.localeCompare("Gurgaon")==0){
    //             Dis="Gurugram"
    //         }
    //         if(Dis.localeCompare("Gautam Buddh Nagar")==0){
    //             Dis="Gautam Buddha Nagar"
    //         }
            
    //         for (var j=0; j<data3.length; j++) {
    //             // console.log(data4[j],Dis)
    //             if(data4[j].localeCompare(Dis)===0){
                   
    //                 const disdata=data3[j].total;
    //                 // console.log(disdata)
    //                 setInfected(disdata.confirmed)
    //                 setRecovered(disdata.recovered)
    //                 setDeath(disdata.deceased)
    //             }}
    //         break;
    //     } }

    // const fetchData = await statepatientData();

    // const state = fetchData.state_wise;


    // for (let i in state) {

    //     if (i.toUpperCase() === Sta.toUpperCase()) {

    //         const district = state[i].district;
    //         console.log(state[i])

    //        for(let j in district){
    //         if (j.toUpperCase() === Dis.toUpperCase()) {
               
    //             setInfected(district[j].confirmed)
    //             setRecovered(district[j].recovered)
    //             setDeath(district[j].deceased)
    //             break;

    //         }
    //        }
            
    //         break;

    //     }

    // }

        

     }

    fetcher();  
  },[]);

    const classes = useStyles();
    return (
        <div className={classes.root}>
       
                    <Card className={classes.card} elevation={4} >
                        <CardContent>
                        <div>
                            <Grid  container  >
                            <Grid item xs={5}>  <Typography className={classes.normal}> You are in</Typography> </Grid>
                            <Grid item xs={7}>  <Typography className={classes.highlight}> {Dis}</Typography> </Grid>
                            {/* <br></br>
                            <br></br>
                            <Grid item xs={12}>  <Typography className={classes.normal}> With Total cases :</Typography> </Grid>
                            <Grid item xs={12}>  <Typography className={classes.normal5}> Delhi district level data not available  </Typography> </Grid> */}
                            </Grid>
                            <br></br>

                            {/* <Grid  container spacing={5} >

                                <Grid item xs={4}>
                                    <Grid  container spacing={1} >
                                        <Grid item xs={12}> <a><img src={infected} height="50" width="50" alt='corona' /><b></b></a> </Grid> */}
                                        {/* <Grid item xs={12}><img src={infected}/></Grid> */}
                                        {/* <Grid item xs={12}> <Typography className={classes.highlight}>{Infected}</Typography>  </Grid>
                                        <br></br><br></br>
                                        <Grid item xs={12}><Typography className={classes.normal1}> Infected</Typography> </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={4}> 
                                    <Grid  container spacing={1}  >
                                        <Grid item xs={12}><a><img src={recovered} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                        <Grid item xs={12}> <Typography className={classes.highlight} >{Recoverd}</Typography>  </Grid>
                                        <br></br><br></br>
                                        <Grid item xs={12}><Typography className={classes.normal1} align="center" > Recovered</Typography> </Grid>
                                    </Grid>
                                </Grid>

                                <Grid item xs={4}>
                                    <Grid  container spacing={1} >
                                        <Grid item xs={12}><a><img src={death} height="50" width="50" alt='corona' /><b></b></a></Grid>
                                        <Grid item xs={12}> <Typography className={classes.highlight} >{Death}</Typography>  </Grid>
                                        <br></br><br></br>
                                        <Grid item xs={12}><Typography className={classes.normal1}> Deaths</Typography> </Grid>
                                    </Grid> 
                                </Grid>
                                
                            </Grid> */}

                        </div>
                        </CardContent>
                                
                            <Districtmap/>
                    </Card>
    </div>
    )
}

export default Districtcard
