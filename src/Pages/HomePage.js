import React from 'react'
import FirstSection from '../Components/FirstSection/FirstSection'
import Header from '../Components/Header/Header'
import About from './About'
import Footer from "../Components/Footer/Footer";
import ProductTab from "../container/ProductTab";
import Toastify from "../Components/Toastify";
import BasicAlerts from "../Components/Toastify";

const HomePage = () => {
    return (
        <div>
            <Header/>
                <FirstSection/>
                <ProductTab/>
                <About/>
                <Footer/>
            <BasicAlerts/>

        </div>
    )
}

export default HomePage