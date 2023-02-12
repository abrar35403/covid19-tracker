import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import { ClassNames } from '@emotion/react';
import { useEffect } from 'react';
import { useState } from 'react';


const Item = styled(Paper)(({ theme }) => ({

  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
   
}));

// const useStyles = styled({
//     root: {
//       display:'flex',
//       justifyContent:'space-around',
//       maxWidth: 1000,
//       margin:'0 auto',
//       marginTop:50
//     },

   
//   });




export default function FullWidthGrid() {

    // const classes = useStyles();

    const[data,setData]=useState([])

  const fetchData=async()=>{
    const response = await fetch(`https://api.covid19api.com/country/south-africa/status/confirmed?from=2020-03-01T00:00:00Z&to=2020-04-01T00:00:00Z`)
      let result=await response.json()
      console.log("result on 0 index = " ,result[0]);
      setData(result)
      
  }

    useEffect(()=>{
      fetchData();
    },[]

    )

    console.log(" on 0 index = " ,data);

  return (
    <div>
    
        <Grid container spacing={1} sx={{ 
          width: '500',
          display:'flex',
      justifyContent:'space-around',
      marginTop:'30px',
          }} >
        {
          data.map((showData)=>{
        return(
          <Grid item xs={12} sm={3}>
          <Item elevation={3} >
          <h3 style={{color:'blue'}}>{showData.Country}</h3>
          <h4><span>Data =</span> <span>{showData.Date}</span></h4>
          <h4><span>Lat =</span> <span>{showData.Lat}</span></h4>
          <h4><span>Lon =</span> <span>{showData.Lon}</span></h4>
          <h4><span>Status =</span> <span>{showData.Status}</span></h4>


         </Item>
        </Grid>
        )    
        
          })
        }
      </Grid>
    </div>
  );
}
