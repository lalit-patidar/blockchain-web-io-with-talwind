import Head from 'next/head'
import { useState } from 'react';
import {CTA, Footer, Navbar, Stats, Testimonials, Banner, Services } from "../components";
import AboutUs from '../components/about-us/About-us';
import ConnectModal from '../components/Models/connect-modal';
import { callOptions, connectOptions } from '../constants';
import styles from '../style';

export default function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const [popupType, setPopupType] = useState("");


  const handlePopup = (type, status) => {
    setShowPopup(status);
     if(type) setPopupType(type);
  }

  return (
    <div >
          <main >
        <div className="bg-primary w-full overflow-hidden">
          <div className={`${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
              <Navbar handlePopup={handlePopup}/>
            </div>
          </div>
          <ConnectModal showPopup={showPopup} handlePopup={handlePopup} options={popupType === "connect" ? connectOptions : callOptions}
            popupType={popupType}
            title={popupType === "connect" ? " We will be happy to connect with you" : "Call Us"}/>

          <div className={`bg-primary ${styles.flexStart} xl:px-20`}>
            <div className={`${styles.boxWidth}`}>
              <Banner />
            </div>
          </div>

          <div className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
            <div className={`${styles.boxWidth}`}>
            <Services />
              <AboutUs />
              <Stats />
              <Testimonials />
              <CTA />
            </div>
          </div>
        </div>
      </main>

      <footer className={`bg-primary ${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Footer />
        </div>
      </footer>
    </div>
  )
}
