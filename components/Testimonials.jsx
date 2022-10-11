import { feedback } from "../constants";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";

const Testimonials = () => (
  <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative xl:px-60  `}>
    <div className="absolute z-[0] w-[60%] h-[60%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <h4 className="font-poppins font-bold text-[25px] leading-[32px] text-white">
           Services
        </h4>
    <div className="flex flex-wrap lg:flex-nowrap sm:justify-center justify-center w-full feedback-container relative z-[1]">
      {feedback.map((card) => <FeedbackCard key={card.id} {...card} />)}
    </div>
  </section>
);

export default Testimonials;
