import { services } from "../constants";
import styles from "../style";
import ServiceCard from "./ServiceCard";

const Testimonials = () => (
  <section id="services" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative xl:px-60  md:my-8 `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <h4 className="font-poppins text-[25px] leading-[32px] text-white  md:my-8  border-b-2 pb-2">
           Services
        </h4>
    <div className="flex flex-wrap lg:flex-nowrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {services.map((card) => <ServiceCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
