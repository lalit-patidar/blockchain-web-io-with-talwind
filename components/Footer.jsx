import styles from "../style";
import { logo } from "../public";
import { footerLinks, socialMedia } from "../constants";
import Image from "next/image"
import logoGugli from "../public/gugli-logo.png"

const Footer = () => (
  <section className={`${styles.flexCenter} ${styles.paddingY} flex-col`}>
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <div className="flex items-center p-5">
      <Image src={logoGugli} alt="logo-image" width={80} height={80}/>
      <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white ml-10">
        Copyright Ⓒ 2022 Gugli. All Rights Reserved.
      </p>
      </div>

      <div className="w-64 flex flex-row justify-between md:mt-0 mt-6 p-5">
        {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="w-[21px] h-[21px] object-contain cursor-pointer mr-4"
            width={30}
            height={30}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer