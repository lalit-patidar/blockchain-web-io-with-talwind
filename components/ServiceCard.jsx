import Image from "next/image"

const ServiceCard = ({ content, name, title,  serviceImage }) => (
  <div className="flex flex-col items-center px-10 py-12 rounded-[20px] w-[350px] max-w-[400px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card" >
    <div className="mb-4 w-32 mx-auto">
    <Image src={serviceImage} alt="service-image" className="w-[42.6px] h-[27.6px] object-contain mb-2" width={150} height={150}/>
    </div>
    <h4 className="font-poppins text-gradient font-bold text-[20px] leading-[32px] text-white my-5">
          {name}
        </h4>
    <p className="font-poppins font-thin text-[14px] leading-[21.4px] text-white ">
      {content}
    </p>
  </div>
);


export default ServiceCard;
