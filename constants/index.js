import { woman, man, facebook, instagram, linkedin, twitter, slack, skype, whatsapp, telephone  } from "../public";
import nftServiceImg from "../public/nft-vector.png";
import smartContractImg from "../public/smart-contract.png";
import uiServiceImg from "../public/ux.png"

export const navLinks = [
  {
    id: "home",
    title: "Home",
  },
  {
    id: "services",
    title: "services",
  },
  {
    id: "about",
    title: "about",
  },
  {
    id: "connect",
    title: "connect",
  },
];



export const callOptions = [
  {
    id: "skype",
    title: "Skype",
    img: skype,
    src: "skype:live:.cid.a3e3f2a675ff5fdb?call"
  },
  {
    id: "phone",
    title: "phone",
    img: telephone,
    src: "tel:+919977138257"
  },
]


export const connectOptions = [
  {
    id: "skype",
    title: "Skype",
    img: skype,
    src: "skype:live:.cid.a3e3f2a675ff5fdb?chat"
  },
  {
    id: "whatsapp",
    title: "Whatsapp",
    img: whatsapp,
    src: "https://wa.me/+919977138257?text=hello"
  },
  {
    id: "slack",
    title: "slack",
    img: slack
  }
];



export const services = [
  {
    id: "service-1",
    content:
    "we build smart contracts in solidity and deploy to main net ethereum blockcahin.",
    name: "Smart Contract Development",
    serviceImage: smartContractImg
  },
  {
    id: "service-2",
    content:
    "we build NFTs in solidity and deploy to main net ethereum blockcahin like erc721, erc1155.",
    name: "NFTs Development",
    serviceImage: nftServiceImg
  },
  {
    id: "service-3",
    content:
    "After successfully testing and deployment of smart contract, We integrate the smart contract to your website and make responsive for users",
    name: "Integrate With Website",
    serviceImage: uiServiceImg
  },
];

export const feedback = [
  {
    id: "feedback-1",
    content:
      "Gugli is the best option to build smart contarcts and dApps with gas efficent.",
    name: "Sumeet Dholi",
    title: "Founder & Leader",
    img: man,
  },
  {
    id: "feedback-2",
    content:
      "For my business i need a smart contract to keep business operations transparent and Gugli has created the smart contact successfuly for me.",
    name: "Pawan Patidar",
    title: "CEO",
    img: man,
  },
  {
    id: "feedback-3",
    content:
      "We need to create a payment wallet to make transaction for my particular clients in MLM network and have to integrate with my existing website, for this we choose gugli to make this project and now its working fine in our website.",
    name: "Preeti Sharma",
    title: "CTO & Product Manager",
    img: woman,
  },
];

export const stats = [
  {
    id: "stats-1",
    title: "Projects Deliverd",
    value: "40+",
  },
  {
    id: "stats-2",
    title: "Trusted by Clients",
    value: "35+",
  },
  {
    id: "stats-3",
    title: "Dedicated Developers",
    value: "110+",
  },
];


export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/gugli.io/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/gugli.io/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/company/gugli-software/",
  },
];

