import React from 'react'
import aboutUs from "../../public/about-us.jpg";
import Image from "next/image"
import styles from "./about-us.module.css"

export default function AboutUs() {
  return (
    <>
    <h1 className="font-poppins text-[25px] text-white mx-auto m-3 mb-8 border-b-2 border-white w-[115px]">
      About us
    </h1>
    <div className={styles.about_us_wrapper} id="about">
    <div className={styles.about_us_image_wrapper}>
      <Image src={aboutUs} alt="about_us_image" className={styles.about_us_image}/>
    </div>
    <div className={styles.about_us_content_wrapper}>
      <h3 className={`${styles.about_us_title} text-gradient font-poppins`}>
        We take care of your requirements
      </h3>
      <p className={`${styles.about_us_caption} font-poppins`}>
        Gugli is on mission to provide efficient and secure blockchain
        application development for your business. We have excellent
        experienced team of developer and experts to build your first
        decentralize app.
      </p>
    </div>
  </div>
    </>
  )
}
