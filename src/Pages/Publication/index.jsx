import React from 'react'
import Home3Header from "../../Component/Headers/Home3Header";
import Footer from "../../Component/Footer/Footer";
import Banner from "../../Component/Banner/Banner";
import PopularCourse from "../../Component/Course/PopularCourse";
// import Cta from "../../Component/Cta/Cta";
import GotoTop from "../../Component/GotoTop";
import Publication1 from '../../Component/PublicationContent/Publication1';


const Publication = () => {
    return (
        <>
            <Home3Header joinBtn={true} />
            <Banner title="Publication" background="assets/images/inner-banner.jpg" />
            <Publication1 />
            <Footer />
            <GotoTop />
        </>)
}

export default Publication