import { apple, bill, google } from "../public";
import styles, { layout } from "../style";
import Image from 'next/image'
import aboutUs from "../public/about-us.jpg"

const Billing = () => (
  <section id="product" className={layout.sectionReverse}>
    <div className={layout.sectionImgReverse}>
      <Image src={aboutUs} alt="about-us" className="w-[100%] h-[100%] relative z-[5] rounded-[10px]" width={600} height={450}/>
    </div>

    <div className={layout.sectionInfo}>
      <h2 className={`font-poppins font-bold text-[32px] leading-[32px] text-white my-5 capitalize ${styles.heading2}`}>
           We take care of your requirements
        </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Gugli is on mission to provide efficient and secure blockchain application development for your business. 
       We have excellent experienced team of developer and experts to build your first decentralize app.
      </p>

    </div>
  </section>
);

export default Billing;
