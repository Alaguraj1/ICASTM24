import React from 'react'
import DownloadSec from '../../Component/DownloadSec/DownloadSec'
import GotoTop from "../../Component/GotoTop";
import Footer from "../../Component/Footer/Footer";
import Home3Header from "../../Component/Headers/Home3Header";
import Banner from "../../Component/Banner/Banner";



const Downloads = () => {
  return (
    <>
            <Home3Header  joinBtn={true} />
        {/* <Home3Header  /> */}
        <Banner title="Downloads" background="assets/images/inner-banner.jpg" />
      <DownloadSec />
      <Footer />
        <GotoTop />
    </>
  )
}

export default Downloads