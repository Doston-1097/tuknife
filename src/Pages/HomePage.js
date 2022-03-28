import React from 'react'
import FirstSection from '../Components/FirstSection/FirstSection'
import Header from '../Components/Header/Header'
import About from './About'
import Footer from "../Components/Footer/Footer";
import ProductTab from "../container/ProductTab";

const HomePage = () => {
    return (
        <div>
            <Header/>
                <FirstSection/>
                <ProductTab/>
                <About/>
                <Footer/>
        </div>
    )
}

export default HomePage