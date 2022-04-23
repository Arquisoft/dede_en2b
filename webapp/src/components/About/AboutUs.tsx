import * as React from "react";
import Paper from '@mui/material/Paper';
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./AboutUs.css";


export default function AboutUs(): JSX.Element {


    return (
        <Paper elevation={10} id={"aboutUs"} sx={{
            display: 'flex',
            flexDirection: "column",
            flexWrap: 'wrap',
            marginTop: '2%',
            maxWidth: '90%',
            maxHeight: '90%',
            marginRight: 'auto',
            marginLeft: 'auto',
            background: 'linear-gradient(-45deg, rgba(238, 119, 82, 0.5), rgba(255, 221, 131, 0.5), rgba(229, 246, 148, 0.5), rgba(176, 234, 218, 0.5))',
            backgroundSize: '400% 400%',
            animation: 'gradient 30s ease infinite',
            border: '5px solid transparent',
            borderColor: 'black',
            borderRadius: '10px',
            marginBottom: '2%'
        }}>

            <Typography className="aboutUsTitle" fontFamily={"Trebuchet MS"} variant={"h2"} sx={{marginLeft:"2%", marginTop:'2%'}}>About us</Typography>
            <Typography fontFamily={"Helvetica"} variant={"h5"} sx={{padding: '4%'}}>
                Thank you for visiting our DeDe webpage. We are a group of Computer Science students that are enrolled in the Software Architecture course,
                and is currently developing an application that simulates a shop and a retail system, which makes use of <a id="solidLink" className="solidLink" href={"https://solidproject.org/"}>Solid</a> in order to guarantee the privacy of the customers when retrieving the necessary data (such as the shipping address)
            </Typography>

            <Typography className="developers" fontFamily={"Trebuchet MS"} variant={"h4"} sx={{marginLeft:"2%", marginTop:'1%'}}>Developer team</Typography>
            <Box sx={{display: 'flex', marginRight:'auto', marginLeft:'auto', paddingTop:'1%', paddingBottom:'2%'}}>

                <div id={"dev1"}>
                    <div className="shape-outer circle">
                        <div className="shape-innerLeft circle"></div>
                    </div>
                    <Typography fontFamily={"Helvetica"} variant={"h6"} sx={{marginTop:'2%', display:'flex'}}>
                        <p id="devName" className="devName">
                            Diego Martín Fernández
                        </p>
                    </Typography>
                </div>
                <div id={"dev2"}>
                    <div className="shape-outerMiddle circle">
                        <div className="shape-innerMiddle circle"></div>
                    </div>
                    <Typography fontFamily={"Helvetica"} variant={"h6"} sx={{marginTop:'2%', display:'flex'}}>
                        <p id="devName" className="devName">
                            Laura Pernía Blanco
                        </p>
                    </Typography>
                </div>

                <div id={"dev3"}>
                    <div className="shape-outer circle">
                        <div className="shape-innerRight circle"></div>
                    </div>
                    <Typography fontFamily={"Helvetica"} variant={"h6"} sx={{marginTop:'2%', display:'flex'}}>
                        <p id="devName" className="devName">
                            Stelian Adrian Stanci
                        </p>
                    </Typography>
                </div>
            </Box>
        </Paper>
    );

}