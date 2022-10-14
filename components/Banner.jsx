import styles from "../style";
import { discount, robot } from "../public";
import GetStarted from "./GetStarted";
import Image from "next/image";
import gugliCoin from "../public/ethereum-coin1.png"


const Banner = () => {
  return (
    <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
        <div className="flex flex-row justify-between items-center w-full">
          <h1 className="flex-1 font-poppins font-semibold ss:text-[45px] text-white ss:leading-[60px] leading-[44px] text-[33px]">
          Do you want create  <span className="text-gradient">Smart Contract</span> ? 
           <br className="sm:block hidden" />  Or your business need decentralized app.
          </h1>
        </div>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts can create smart contracts, NFTS, ERC721, ERC1155 with
          best development practice and gas effiecient
        </p>
      </div>

      <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}>
        <Image src={gugliCoin} alt="ethereum-coin" className="w-[100%] h-[100%] relative z-[5] " width={400} height={400}/>
      </div>
    </section>
  );
};

export default Banner;
