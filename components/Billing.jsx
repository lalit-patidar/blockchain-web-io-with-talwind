import { apple, bill, google } from "../public";
import styles, { layout } from "../style";
import Image from 'next/image'
import aboutUs from "../public/about-us.jpg"
import { Grid } from "@mui/material";

const Billing = () => (
  <>
      <h1 className="text-4xl text-white mx-auto m-3 mb-8 border-b-2 border-white w-[145px]">About us</h1>
  
    <Grid container>
    <Grid item xl={6} lg={6}>
      <Image src={aboutUs} alt="about-us" className="w-[100%] h-[100%] relative z-[5] rounded-[10px]" width={600} height={450}/>
      </Grid>
    <Grid item xl={6} lg={6} alignItems="center"
  justify="center" className="md:pt-20 lg:ml-8">
      <h2 className={`font-poppins font-bold text-[32px] leading-[32px] text-white my-5 capitalize ${styles.heading2}`}>
           We take care of your requirements
        </h2>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
       Gugli is on mission to provide efficient and secure blockchain application development for your business. 
       We have excellent experienced team of developer and experts to build your first decentralize app.
      </p>
    </Grid>
    </Grid>

  </>
);

export default Billing;
