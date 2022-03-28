import {Box, Button, Container, Typography} from '@mui/material'
import React from 'react'
import vh from "../../Assets/Images/100vh.png";

const FirstSection = () => {
    return (
        <Box sx={{
            height: "100vh",
            width: "100%",
            backgroundImage: `url(${vh})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            boxShadow:"0 4px 20px rgba(0,0,0,0.5)"
        }}>
            <Container
            sx={{display: "flex",flexDirection: "column",justifyContent: "center",height: "100%"}}
            >
                <Box sx={{
                    color: "white",
                }}>
                    <Typography
                        sx={{maxWidth: "500px", fontSize: {md: "35px", xs: "25px"}, fontweight: 'bold'}}
                    >
                        Исключительное качество без компромиссов
                    </Typography>
                    <Typography
                        sx={{
                            maxWidth: "420px",
                            fontSize: {md: "20px", xs: "15px"},
                            marginTop: "10px",
                        }}
                    >
                        Ножи «Tuotown» – это главный инструмент поваров и секрет кулинарного
                        мастерства
                    </Typography>
                    <Button
                        variant='outlined' color="error" sx={{mt: "20px"}}>ПОДРОБНЕЕ</Button>
                </Box>

            </Container>
        </Box>
    )
}

export default FirstSection