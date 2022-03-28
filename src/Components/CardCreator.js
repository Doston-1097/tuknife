import React, {useState} from 'react';
import {Grid, Typography,Box, Button} from "@mui/material";
import Paper from '@mui/material/Paper';
import {styled} from '@mui/material/styles';
import {dispatch} from "../redux/store";
import { IoIosAddCircleOutline} from "react-icons/io";
import IconButton from "@mui/material/IconButton";

const Item = styled(Paper)(({theme}) => ({
    backgroundColor: "#272727",
    alignItems: "center",
    display: "flex",
    boxShadow:"0 2px 20px rgba(0,0,0,0.2)",
    minHeight:"250px"
}));

function CardCreator({knifesData}) {
    const change = (product) => {
        dispatch({type: 'ADD_BASKET', payload: {...product}},)

        console.log(product)
    }
    console.log(knifesData)
    return (
        <Grid container sx={{mt:"50px"}} spacing={3} >
            {knifesData.map((kni, id) => (
                <Grid xs={6} lg={3} md={4} sx={{color:"white"}} item key={id}>
                    <Item sx={{position: "relative",overflow:"hidden",justifyContent:"center",alignItems: "center",display: "flex"}}>
                        <Box sx={{width:"100%"}}>
                            <IconButton variant="outlined" sx={{position:"absolute",padding:"10px" ,'&:hover':{transform:"scale(1.3)"},transition:".3s",color:"#FF0000",fontSize:"25px",right:'0',top:"0"}} onClick={() => change(knifesData[id])}><IoIosAddCircleOutline/></IconButton>
                        </Box>
                        <img style={{width:"100%",height:"100%"}} src={kni.img} alt=""/>
                    </Item>
                        <Typography sx={{fontSize:"14px", color: "white" }} my={2}>
                            {kni.title}
                        </Typography>

                        <Typography sx={{fontSize:"14px", color: "silver" }} my={2}>
                            {kni.price} сум
                        </Typography>
                </Grid>
            ))}
        </Grid>
    );
}

export default CardCreator;




