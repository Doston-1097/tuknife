import React, {useEffect, useRef, useState} from "react";
import {
    Box,
    Button,
    Card,
    Container,
    FormControl,
    Grid,
    Input,
    MenuItem,
    Select,
    Typography,
} from "@mui/material";
import {CgArrowLongLeft} from "react-icons/cg";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import {dispatch} from "../../redux/store";
import {BsCreditCard2Back} from "react-icons/bs";
import {HiOutlineLocationMarker} from "react-icons/hi";
import {TiDeleteOutline} from "react-icons/ti";
import {sendProducts} from "../../redux/actions/doing";
import Header from "../../Components/Header/Header";
import Footer from "../../Components/Footer/Footer";
import Toastify from "../../Components/Toastify";

function Basket(props) {
    window.scrollTo(0, 0);
    // getProducts reduxdan mahsulot malumotini oladi
    const {getBasket} = useSelector((state) => state.allProducts);
    const [basketcha, setBasketcha] = useState(getBasket)
    //----------------------------------------------------------------------------------------------
    const [numsProducts, setNumsProducts] = useState();

    const [allPrice, setAllPrice] = useState(0);
    useEffect(() => {
        let S = 0;
        for (let i = 0; i <= getBasket.length - 1; i++) {
            S += getBasket[i].price * getBasket[i].nums;
            setAllPrice(S);
        }
    }, [getBasket]);

    //------------------------------------------------------------------------------
    const navigate = useNavigate();

    // bu funksiya productlarni savatdan o'chiradi
    const removeBasket = (id) => {
        dispatch({type: "REMOVE_BASKET", payload: id});
    };
    //------------------------------------------------------------------------------

    //savat qismidan asosiy menuga qaytish
    const goBack = () => {
        navigate("/");
    };
    //----------------------------------------------------------------------------------------
    //     const [price,setPrice] =useState(0);

    const handleChange = (e, getItem, index) => {
        e.preventDefault();
        const nums = e.target.value;
        dispatch({
            type: "EDIT_BASKET",
            payload: {data: {...getItem, nums: nums}, index: index},
        });
    };

    //------------------------------------------------------------------------

    // textfeilddan valuelarni olish
    const nameRef = useRef("");
    const numberRef = useRef("");
    const emailRef = useRef("");

    const sendValue = () => {
        const userData={
            name: nameRef.current.value,
            phone: numberRef.current.value,
            email: emailRef.current.value,
        }
        if (
            userData.name !== "" &&
            userData.phone !== "" &&
            userData.email !== ""
        ) {
            console.log(userData);
            sendProducts(getBasket, userData);
            setBasketcha([])


        }
        // return console.log(nameRef.current.value,numberRef.current.value,emailRef.current.value);
    };

    return (


        <>
            <Header/>
            <Container sx={{py: "50px"}}>
                <Grid container sx={{display: 'inline'}} spacing={2}>
                    <Grid item xs={8} md={6}
                          sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
                        <Box><Button onClick={() => goBack()} sx={{color: 'white !important'}}><CgArrowLongLeft/>назад</Button></Box>
                    </Grid>
                    <Typography component={'h3'} variant='h2'
                                sx={{textAlign: 'center', mb: "50px", color: 'white !important'}}>Kорзина</Typography>

                    <Grid sx={{display: 'inline',}}>
                        {
                            basketcha.map((getItem, id) => {

                                return (
                                    <Card key={id} sx={{
                                        display: 'flex',
                                        padding: '30px',
                                        marginY: '10px',
                                        justifyContent: 'space-between',
                                        backgroundColor: '#303030',
                                        color: 'white',
                                    }} xs={12} md={10} lg={8} xl={6}>
                                        <Box sx={{display: 'flex', alignItems: 'center',}}>
                                            <CardMedia
                                                component="img"
                                                image={getItem.img}
                                                alt="green iguana"
                                                sx={{borderRadius: '10px', width: '56px', height: '49px'}}
                                            />
                                            <CardContent sx={{
                                                display: 'flex',
                                                flexWrap: 'wrap',
                                                minWidth: '200px',
                                                alignItems: 'center',
                                                gap: '20px',
                                            }}>
                                                <Typography gutterBottom variant="h5" component="div" margin={0}>
                                                    {getItem.title}
                                                </Typography>
                                            </CardContent>
                                        </Box>
                                        <Box sx={{display: 'flex', alignItems: 'center', gap: '20px'}}>

                                            <FormControl fullWidth>
                                                <Select
                                                    sx={{width: '60px', color: "white !important"}}
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    defaultValue={getItem.nums}
                                                    name={getItem.price}
                                                    value={numsProducts}
                                                    onChange={(e) => handleChange(e, getItem, id)}
                                                >
                                                    <MenuItem value={1}>1</MenuItem>
                                                    <MenuItem value={2}>2</MenuItem>
                                                    <MenuItem value={3}>3</MenuItem>
                                                    <MenuItem value={4}>4</MenuItem>
                                                    <MenuItem value={5}>5</MenuItem>
                                                </Select>
                                            </FormControl>


                                            <Typography variant="body2" color="text.secondary"
                                                        sx={{color: 'white !important'}}>
                                                {getItem.price * getItem.nums} сум
                                            </Typography>
                                            <CardActions>

                                                <Button size="medium" sx={{fontSize: '35px', color: 'white'}}
                                                        onClick={() => removeBasket(id)}><TiDeleteOutline/></Button>
                                            </CardActions>
                                        </Box>
                                    </Card>
                                )
                            })
                        }
                        <Box sx={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'end',
                            backgroundColor: '#232323',
                            color: 'white',
                            borderRadius: '15px',
                            marginY: 2,
                        }} xs={12} md={10} lg={8} xl={6} padding={3}>
                            <Box>
                                <Typography>К оплате:</Typography>
                                <Typography>{allPrice} so'm</Typography>
                            </Box>
                        </Box>

                    </Grid>
                    <Grid container sx={{display: 'flex', alignItems: 'center'}}>
                        <Grid item xs={12} md={12} lg={6} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                            color: "white !important",
                            marginY: '30px'
                        }}>
                            <Box sx={{
                                fontSize: '35px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white !important',
                                width: 80,
                                height: 80,
                                borderRadius: '15px',
                                backgroundColor: '#232323',
                                paddingX: '28px'
                            }}><HiOutlineLocationMarker/></Box>
                            <Box>
                                <Typography>Доставка</Typography>
                                <Typography>Саратов, 25.10 бесплатно</Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={12} lg={6} sx={{
                            display: 'flex',
                            alignItems: 'center',
                            gap: '30px',
                            color: "white !important",
                            marginY: '30px'
                        }}>
                            <Box sx={{
                                fontSize: '35px',
                                display: 'flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                color: 'white !important',
                                width: 80,
                                height: 80,
                                borderRadius: '15px',
                                backgroundColor: '#232323',
                                paddingX: '28px'
                            }}><BsCreditCard2Back/></Box>
                            <Box>
                                <Typography>Оплата</Typography>
                                <Typography>Самый удобный для Вас: Картой на сайте</Typography>
                            </Box>
                        </Grid>
                    </Grid>
                    <Grid sx={{
                        borderRadius: '15px',
                        backgroundColor: '#232323',
                        color: 'white',
                        paddingY: '60px !important',
                        paddingX: '40px !important'
                    }}>
                        <Typography component={'h3'} variant={'h4'}>Для подтверждения заказа - введите ваши данные и мы
                            перезвоним вам</Typography>
                        <Grid container>
                            <Grid item xs={12} md={6} lg={6} px={2}>
                                <form>
                                    <Input
                                        component={'input'} variant='input'

                                        sx={{
                                            borderRadius: '12px',
                                            width: '100%',
                                            marginY: '15px',
                                            color: 'white',
                                            border: 'none',
                                            outline: 'none',
                                            backgroundColor: '#303030',
                                            paddingX: '18px',
                                            paddingY: '25px',
                                        }}
                                        placeholder={'Имя Фамилия'}
                                        required
                                        inputRef={nameRef}
                                        type={'text'}
                                    />
                                    <Input
                                        component={'input'} variant='input'
                                        sx={{
                                            borderRadius: '12px',
                                            width: '100%',
                                            marginY: '15px',
                                            color: 'white',
                                            border: 'none',
                                            outline: 'none',
                                            backgroundColor: '#303030',
                                            paddingX: '18px',
                                            paddingY: '25px',
                                        }}
                                        placeholder={'+998(91)464-54-36'}
                                        inputRef={numberRef}
                                        required
                                        type={'number'}
                                    />


                                    <Input
                                        component={'input'} variant='input'

                                        sx={{
                                            borderRadius: '12px',
                                            width: '100%',
                                            marginY: '15px',
                                            color: 'white',
                                            border: 'none',
                                            outline: 'none',
                                            backgroundColor: '#303030',
                                            paddingX: '18px',
                                            paddingY: '25px',
                                        }}
                                        placeholder={'Ваша почта'}
                                        inputRef={emailRef}
                                        type={'text'}
                                    />

                                </form>
                            </Grid>
                            <Grid item xs={12} md={6} lg={6} px={2}>
                                <Box>
                                    <Typography sx={{paddingY: '20px'}}>Нажимая «Выбрать способ доставки», подтверждаю,
                                        что я ознакомлен с условиями
                                        <Typography sx={{color: '#C80000', display: 'inline-block'}}>Публичного договора
                                            оферты</Typography> и <Typography
                                            sx={{color: '#C80000', display: 'inline-block'}}>Политикой
                                            конфиденциальности</Typography>, а также согласен получать
                                        информационную рассылку</Typography>
                                        <Button variant="contained" onClick={sendValue} sx={{
                                            color: 'white',
                                            backgroundColor: '#C80000',
                                            paddingY: '16px',
                                            paddingX: '34px',
                                            borderRadius: '27px',
                                            '&:hover': {backgroundColor: '#C82000'}
                                        }}>Отправить форму</Button>

                                </Box>
                            </Grid>
                        </Grid>
                    </Grid>


                </Grid>
            </Container>
            <Footer/>
        </>
    );
}

export default Basket;
