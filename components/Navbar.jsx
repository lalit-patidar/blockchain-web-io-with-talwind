import { useState } from "react";
import  Image  from "next/image";
import { close, menu, callImg } from "../public";
import { navLinks } from "../constants";
import gugliLogo from "../public/trans-gugli.png";

const Navbar = ({handlePopup}) => {
  const [active, setActive] = useState("Home");
  const [toggle, setToggle] = useState(false);
  const [showp, setShowp] = useState(true)


console.log("stat", active)
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <Image src={gugliLogo} alt="hoobank" className="w-[124px] h-[32px] rounded-[10px]" width={100} height={100} />
     
      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
       <div className="w-16 flex items-center cursor-pointer">
      
       <Image src={callImg} alt="call-png" width={50} height={50} onClick={() => handlePopup("call", true)}/>
       
       </div>
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${
              active === nav.title ? "text-white" : "text-dimWhite"
            } ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}`}
            onClick={() => {
              setActive(nav.title);
              handlePopup("connect", true)
            }}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <Image
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle(!toggle)}
          />

        <div
          className={`${
            !toggle ? "hidden" : "flex"
          } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
          >
          <ul className="list-none flex justify-end items-start flex-1 flex-col">
            {navLinks.map((nav, index) => (
              <li
              key={nav.id}
              className={`font-poppins font-medium cursor-pointer text-[16px] ${
                active === nav.title ? "text-white" : "text-dimWhite"
              } ${index === navLinks.length - 1 ? "mb-0" : "mb-4"}`}
              onClick={() => {
                setActive(nav.title);
                handlePopup("connect", true)
              }}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
