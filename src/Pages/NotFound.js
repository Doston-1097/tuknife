import React from "react";
import {
  Card,
  CardActionArea,
  CardMedia,
  Typography,
  Box,
  Button,
} from "@mui/material";
import {useNavigate} from 'react-router-dom'

export default function NotFound() {
    const navigate = useNavigate();
  return (
    <Box>
      <Button
        variant="contained"
        onClick={()=>navigate('./')}
        sx={{
          backgroundColor: "red",
          textTransform: "capitalize",
          borderRadius: "10px",
          margin: '30px'
        }}
      >
        Go back
      </Button>
      <Box paddingY="300px" sx={{ textAlign: "center" }}>
        <Typography component="h1" variant="h1" sx={{ color: "red" }}>
          Not found
        </Typography>
      </Box>
      {/* <Card sx={{height: "100vh", backgroundColor:'transparent'}}>
        <CardActionArea>
          <CardMedia
            component="video"
         
            image={
              "https://assets3.lottiefiles.com/packages/lf20_GIyuXJ.json"
            }
          />
        </CardActionArea>
      </Card> */}
    </Box>
  );
}
