import {
    Box,
    Typography,
    Grid,
    FormControl,
    OutlinedInput,
    IconButton,
    Button, Container,
} from "@mui/material";
import {styled} from "@mui/system";
import React from "react";
import {GiKnifeFork} from "react-icons/gi";
import {IoIosRestaurant} from "react-icons/io";
import {GiBowieKnife, GiBarbecue} from "react-icons/gi";
import {RiKnifeBloodLine} from "react-icons/ri";
import Knives1 from "../../Assets/Images/Knives1.png";
import Knives2 from "../../Assets/Images/Knives2.png";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Clear from "./Mappie";

function Map() {
    window.scrollTo(0, 0);
    const Item = styled(Box)(({theme}) => ({}));

    return (
        <Box>
            <Header/>
            <Box
                sx={{
                    color: "white",
                    backgroundColor: "#373737",
                    textAlign: "center",
                    paddingY: "30px",
                }}
            >
                <Typography
                    component="h1"
                    variant="h1"
                    sx={{
                        mt: "50px",
                        fontWeight: "500",
                        fontSize: "32px",
                        lineheight: "38px",
                    }}
                >
                    Карта
                </Typography>
            </Box>
            <Container
                sx={{
                    backgroundColor: "#transparent",
                    color: "white",
                    paddingY: "40px"
                }}
            >
                <Box sx={{flexGrow: 1, color: "#828282"}}>
                    <Grid container spacing={2}>
                        <Grid item lg={6} xs={12}>
                            <Item>
                                <Box component="form" noValidate autoComplete="off">
                                    <FormControl sx={{width: "100%"}}>
                                        <OutlinedInput
                                            placeholder="Страна, город, улица..."
                                            sx={{
                                                color: "#ADACAC",
                                                borderRadius: "35px",
                                                borderColor: "#ADACAC",
                                            }}
                                        />
                                    </FormControl>
                                </Box>
                            </Item>
                        </Grid>
                        <Grid item lg={6} xs={12} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: "center",
                            flexDirection: 'column'
                        }}>
                            <Item>
                                <IconButton
                                    sx={{
                                        color: "#ADACAC",
                                        borderColor: "#ADACAC",
                                        border: "1px solid",
                                        width: "50px",
                                        height: "50px",
                                        marginLeft: "30px",
                                        marginBottom: "10px",
                                    }}
                                >
                                    <GiKnifeFork/>
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: "#ADACAC",
                                        borderColor: "#ADACAC",
                                        border: "1px solid",
                                        width: "50px",
                                        height: "50px",
                                        marginLeft: "30px",
                                        marginBottom: "10px",

                                    }}
                                >
                                    <IoIosRestaurant/>
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: "#ADACAC",
                                        borderColor: "#ADACAC",
                                        border: "1px solid",
                                        width: "50px",
                                        height: "50px",
                                        marginLeft: "30px",
                                        marginBottom: "10px",

                                    }}
                                >
                                    <GiBowieKnife/>
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: "#ADACAC",
                                        borderColor: "#ADACAC",
                                        border: "1px solid",
                                        width: "50px",
                                        height: "50px",
                                        marginLeft: "30px",
                                        marginBottom: "10px",

                                    }}
                                >
                                    <RiKnifeBloodLine/>
                                </IconButton>
                                <IconButton
                                    sx={{
                                        color: "#ADACAC",
                                        borderColor: "#ADACAC",
                                        border: "1px solid",
                                        width: "50px",
                                        height: "50px",
                                        marginLeft: "30px",
                                        marginBottom: "10px",

                                    }}
                                >
                                    <GiBarbecue/>
                                </IconButton>
                            </Item>
                        </Grid>
                        <Grid item md={8} lg={6} xs={12}>
                            <Box sx={{borderRadius: "20px", overflow: "hidden",}}>
                                <Clear/>
                            </Box>
                        </Grid>
                        <Grid item md={4} xs={12} lg={6}>
                            <Item>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        borderRadius: "25px",
                                        width: "100%",
                                        fontSize: "14px",
                                        fontWeight: "600",
                                        borderColor: "#ADACAC",
                                        color: "#ADACAC",
                                        textTransform: "capitalize",
                                    }}
                                >
                                    Найти ближайший
                                </Button>
                                <Box></Box>
                            </Item>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
            <Box sx={{
                color: "white",
                backgroundColor: "#373737",
                textAlign: "center",
                paddingY:"80px"
            }}>
                <Container>
                    <Grid container spacing={2}>
                        <Grid
                            sx={{
                                flexWrap: {xs: "wrap", md: "nowrap"},
                                display: "flex",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "space-between",
                            }}
                        >
                            <Item sx={{width: {xs: "100%", sm: "50%"},overflow:"hidden !important"}}>
                                <img  src={Knives1} alt="knives" width="80%"/>
                            </Item>
                            <Item
                                sx={{
                                    flex: "1",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "24px",
                                        maxWidth: {xs: "100%", sm: "330px"},
                                    }}
                                >
                                    Исключительное качество без компромиссов
                                </Typography>
                                <Typography sx={{maxWidth: {xs: "100%", sm: "330px"}}}>
                                    Ножи «Tuotown» — это главный инструмент поваров и секрет
                                    кулинарного мастерства
                                </Typography>
                            </Item>
                        </Grid>

                        <Grid
                            sx={{
                                flexWrap: {xs: "wrap", md: "nowrap"},
                                display: "flex",
                                width: "100%",
                                alignItems: "center",
                                justifyContent: "space-between",
                                margin: '40px 0px'
                            }}
                        >

                            <Item
                                sx={{
                                    flex: "1",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    flexDirection: "column",
                                    order: {xs: '2', sm: '1'},
                                }}
                            >
                                <Typography
                                    sx={{
                                        fontWeight: "600",
                                        fontSize: "24px",
                                        maxWidth: {xs: "100%", sm: "330px"},
                                    }}
                                >
                                    Исключительное качество без компромиссов
                                </Typography>
                                <Typography sx={{maxWidth: {xs: "100%", sm: "330px"}}}>
                                    Ножи «Tuotown» — это главный инструмент поваров и секрет
                                    кулинарного мастерства
                                </Typography>
                            </Item>
                            <Item sx={{width: {xs: "100%", sm: "50%"}, order: {xs: '1', sm: '2'}}}>
                                <img src={Knives2} alt="knives" width="80%"/>
                            </Item>
                        </Grid>
                    </Grid>
                    <Box sx={{paddingY: "30px"}}>
                        <Typography
                            component="h2"
                            variant="h2"
                            sx={{lineHeight: "28px", fontSize: "24px", fontWeight: "500"}}
                        >
                            Узнавайте первым о новинках и новостях
                        </Typography>
                    </Box>
                    <Box component="form" noValidate autoComplete="off">
                        <FormControl sx={{}}>
                            <OutlinedInput
                                placeholder="Ваш e-mail"
                                sx={{
                                    borderRadius: "5px !important",
                                    color: "#ADACAC",
                                    borderColor: "#ADACAC",
                                    backgroundColor: "#272727",
                                }}
                            />
                        </FormControl>
                    </Box>
                </Container>
            </Box>

            <Footer/>
        </Box>
    );
}

export default Map;