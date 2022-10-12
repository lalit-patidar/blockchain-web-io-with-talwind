import { woman, man, people02, people03, facebook, instagram, linkedin, twitter, airbnb, binance, coinbase, dropbox, send, shield, star  } from "../public";
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

export const features = [
  {
    id: "feature-1",
    icon: star,
    title: "Rewards",
    content:
      "The best credit cards offer some tantalizing combinations of promotions and prizes",
  },
  {
    id: "feature-2",
    icon: shield,
    title: "100% Secured",
    content:
      "We take proactive steps make sure your information and transactions are secure.",
  },
  {
    id: "feature-3",
    icon: send,
    title: "Balance Transfer",
    content:
      "A balance transfer credit card can save you a lot of money in interest charges.",
  },
];

export const services = [
  {
    id: "service-1",
    content:
    "we build smart contracts in solidity and deploy to main net ethereum blockcahin.",
    name: "Smart Contract Development",
    title: "Founder & Leader",
    serviceImage: smartContractImg
  },
  {
    id: "service-2",
    content:
    "we build NFTs in solidity and deploy to main net ethereum blockcahin like erc721, erc1155.",
    name: "NFTs Development",
    title: "Founder & Leader",
    serviceImage: nftServiceImg
  },
  {
    id: "service-3",
    content:
    "After successfully testing and deployment of smart contract we can also integrate the smart contract to your website with the help of metamsk wallet",
    name: "Integrate With Website",
    title: "Founder & Leader",
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

export const footerLinks = [
  {
    title: "Useful Links",
    links: [
      {
        name: "Content",
        link: "https://www.hoobank.com/content/",
      },
      {
        name: "How it Works",
        link: "https://www.hoobank.com/how-it-works/",
      },
      {
        name: "Create",
        link: "https://www.hoobank.com/create/",
      },
      {
        name: "Explore",
        link: "https://www.hoobank.com/explore/",
      },
      {
        name: "Terms & Services",
        link: "https://www.hoobank.com/terms-and-services/",
      },
    ],
  },
  {
    title: "Community",
    links: [
      {
        name: "Help Center",
        link: "https://www.hoobank.com/help-center/",
      },
      {
        name: "Partners",
        link: "https://www.hoobank.com/partners/",
      },
      {
        name: "Suggestions",
        link: "https://www.hoobank.com/suggestions/",
      },
      {
        name: "Blog",
        link: "https://www.hoobank.com/blog/",
      },
      {
        name: "Newsletters",
        link: "https://www.hoobank.com/newsletters/",
      },
    ],
  },
  {
    title: "Partner",
    links: [
      {
        name: "Our Partner",
        link: "https://www.hoobank.com/our-partner/",
      },
      {
        name: "Become a Partner",
        link: "https://www.hoobank.com/become-a-partner/",
      },
    ],
  },
];

export const socialMedia = [
  {
    id: "social-media-1",
    icon: instagram,
    link: "https://www.instagram.com/",
  },
  {
    id: "social-media-2",
    icon: facebook,
    link: "https://www.facebook.com/",
  },
  {
    id: "social-media-3",
    icon: twitter,
    link: "https://www.twitter.com/",
  },
  {
    id: "social-media-4",
    icon: linkedin,
    link: "https://www.linkedin.com/",
  },
];

export const clients = [
  {
    id: "client-1",
    logo: airbnb,
  },
  {
    id: "client-2",
    logo: binance,
  },
  {
    id: "client-3",
    logo: coinbase,
  },
  {
    id: "client-4",
    logo: dropbox,
  },
];