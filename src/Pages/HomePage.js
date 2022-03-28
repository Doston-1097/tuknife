import React from 'react'
import FirstSection from '../Components/FirstSection/FirstSection'
import Header from '../Components/Header/Header'
import About from './About'
import MyPart from "../Components/MyPart";
import Footer from "../Components/Footer/Footer";

const HomePage = () => {
    return (
        <div>
            <Header/>
                <FirstSection/>
                <MyPart/>
                <About/>
                <Footer/>
        </div>
    )
}

export default HomePage