"use client";
import Img from "<absolute>/images/PORTRAIT.png";
import Flower from "<absolute>/images/FLOWER.svg";
import Circle from "<absolute>/images/CIRCLE.svg";
import Arrow from "<absolute>/images/arrow.svg";
import Image from "next/image";
import Loader from "./Loader";
import { motion } from "framer-motion";
import { useState } from "react";

export default function Home() {
  const list = [
    /*   {
        title: "TM Agency",
        desc: "It's the ultimate solution designed to deliver efficiency, security, and seamlessness to your agency banking experience.",
        link: "https://agencybanking.tm30.net/",
        type: "REACT/VITE",
      },
      {
        title: "MRT Management Tool",
        desc: "It used by organisations to measure, review and track an employee's performance.",
        link: "https://mrtstaff.com/",
        type: "VUE",
      }, */
    /*  {
       title: 'Dhaniel',
       link: 'https://www.dhaniel.site/'
     }, */
    {
      title: "Takeout Media",
      desc: "Takeout is Design Agency. At Dork we helped them build an online presence",
      link: "https://takeoutmedia.xyz/",
      type: "VUE",
    },
    {
      title: "Recital Finance",
      desc: "Supercharged Payment and Financial Operations Infrastructure for Growing Businesses",
      link: "https://recital.finance/",
      type: "REACT/NEXT",
      side: true,
    },
    {
      title: "Digitslaw",
      desc: "It's a All-in-one law practice software.",
      link: "https://digitslaw.com/",
      type: "REACT/NEXT",
      side: true,
    },
    {
      title: "Propkip",
      desc: "This is a service provision software, get your quick service easily e.g laundry, plumbing etc.",
      link: "https://www.propkip.com/",
      type: "VUE",
    },
    {
      title: "Nasida (NASARAWA INVESTMENT AND DEVELOPMENT AGENCY) Website",
      desc: "NASIDA is the Nasarawa Investment and Development Agency, created through an act of the Nasarawa State House of Assembly to initiate, promote, facilitate and coordinate investments in Nasarawa State, whether it be public private partnerships, privatization, concessions or commercialization of state owned assets.",
      link: "https://nasida.na.gov.ng/",
      type: "VUE",
    },
    {
      title: "Paymybills",
      desc: "Paymybills helps you to add and manage all your bills in one place. View a list of all your upcoming bills and their due dates..",
      link: "https://www.paymybills.ng/",
      type: "REACT",
    },
    {
      title: "UP Connect Transactionn Monitoring Dashboard",
      desc: "The transaction monitoring dashboard is a data analytics monitoring solution that enable tracking of key performance metrics and easy visualization of transactional data sets for various category of users. It gives a high-level view of mission critical metrics and also enable download of selected data sets for further detailed analysis by the users.",
      link: "https://tsadashboard.up-ng.com/",
      type: "REACT",
    },
    {
      title: "Paymeter for EKEDC",
      desc: "Paymeter is Electircity Bill Payments application that helps customers under EKEDC easily pay swiftly for their ekedc meters. Best experienced on mobile view",
      link: "https://user.paymeterng.com/",
      type: "REACT/VITE",
    },

    {
      title: "Transfer Rocket",
      desc: "Transfer rocket is an inter country money transfer platform, mostly aids the transfer of funds from Nigeria to the UK, as well as US and few countries in europe. This platform is best  experienced on mobile.",
      link: "https://dashboard.transferrocket.co.uk/",
      type: "REACT",
      side: true,
    },
    {
      title: "Petabyte eSports Mobile",
      desc: "It's community app for gamers and eSports professionals, to help faster connect other gamers to a wide ecosystem of resources in regards to gaming or eSports",
      link: "https://pesports.gg/",
      type: "REACT NATIVE",
      side: true,
    },
    {
      title: "Boton",
      desc: "A simple CSS library for getting nice styled custom buttons.",
      link: "https://boton.vercel.app/",
      type: "CSS",
      side: true,
    },
    {
      title: "Fyrre",
      link: "https://fyrre.vercel.app/",
      side: true,
    },
    {
      title: "Vue Nav UI",
      desc: "This is a custom navbar vuejs package.",
      link: "https://dhanielcodes.github.io/vue-navigation-ui/",
      type: "VUE",
      side: true,
    },
  ];
  const [loading, setLoading] = useState(true);

  if (typeof window !== "undefined") {
    window.addEventListener("load", () => {
      setLoading(false);
    });
  }

  return (
    <>
      <Loader />
      <motion.div
        animate={{
          opacity: loading ? 0 : 1,
          transform: loading ? "translateY(10%)" : "translateY(0%)",
        }}
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.8,
          delay: 0.6,
        }}
      >
        <div
          className={`p-4 w-full md:h-screen m-auto bg-[#000]  overflow-hidden overflow-y-auto md:grid-rows-10 gap-4 grid`}
        >
          <div
            className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   uppercase font-[Gilroy-Medium] p-[20px] flex items-center gap-2 h-full text-[20px] rounded-2xl text-white`}
          >
            <span className={`font-[Gilroy-Light] italic`}>Daniel</span> Adekoya
          </div>
          <div
            className={`grid lg:grid-cols-6 md:grid-cols-4 grid-cols-1 md:gap-4 row-span-9`}
          >
            <div
              className={`grid grid-rows-9 gap-4 w-full col-span-4 h-full rounded-2xl`}
            >
              <div
                className={`grid md:grid-cols-6  grid-cols-1 row-span-5 md:gap-4 md:mb-0 mb-4 rounded-2xl`}
              >
                <div
                  className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   relative col-span-4  w-full p-[30px] flex flex-col items-start justify-between h-full rounded-2xl text-white`}
                >
                  <Image
                    src={Flower}
                    className="self-end animate-spin-slow"
                    alt={""}
                  />
                  <div className="text-[55px] font-[Gilroy-Bold] leading-[60px]">
                    <div className="">Frontend</div>
                    <div className="italic font-[Gilroy-Light]">
                      FinTech-Focused
                    </div>
                    <div className="">Engineer</div>
                  </div>
                </div>
                <div
                  className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear relative md:mt-0 mt-4 overflow-hidden uppercase col-span-2  w-full flex items-center h-full rounded-2xl text-white`}
                >
                  <Image
                    src={Img}
                    className="transform hover:scale-[1.1] transition-all duration-1250 ease-linear w-full h-full object-cover "
                    alt={""}
                  />
                </div>
              </div>
              <div
                className={`grid md:grid-cols-6 grid-cols-1 row-span-5 gap-4 rounded-2xl md:mb-0 mb-4`}
              >
                <div
                  className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   col-span-3 relative w-full p-[30px] flex flex-col items-start justify-between h-full  rounded-2xl text-white`}
                >
                  <Image
                    src={Circle}
                    className="animate-spin-slower"
                    alt={""}
                  />
                  <div className="text-[18px] font-[Gilroy-Light]">
                    Daniel Adekoya is a results-driven Front-End Engineer with
                    four years of experience, specializing in building secure,
                    intuitive, and responsive fintech applications. I focus on
                    UI design, web, and mobile development, creating seamless
                    user experiences for financial platforms that require high
                    data security and compliance standards.
                  </div>
                </div>
                <a
                  target="_blank"
                  href="mailto:adekoyadaniel53@gmail.com"
                  className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear block  col-span-3  w-full p-[30px] flex justify-between flex-col h-full  rounded-2xl text-white`}
                >
                  <div className="flex justify-between">
                    <span className="text-[18px] leading-6 font-[Gilroy-Medium]">
                      Have some
                      <br />
                      questions?
                    </span>
                    <Image src={Arrow} className="" alt={""} />
                  </div>
                  <div className="text-[50px] font-[Gilroy-Medium]">
                    Contact me
                  </div>
                </a>
              </div>
            </div>

            <div className={`grid col-span-2 grid-rows-9 gap-4`}>
              <div
                className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   row-span-8 w-full p-[30px] h-[78vh] overflow-hidden overflow-y-scroll rounded-2xl text-white`}
              >
                <h1 className="text-[35px] mt-6 font-[Gilroy-Medium]">
                  Projects
                </h1>
                <hr className="my-8" />
                {list?.map((item, index) => {
                  return (
                    <a
                      className="mb-6 block"
                      target="_blank"
                      href={item?.link}
                      key={index}
                    >
                      <div className="flex justify-between">
                        <span className="text-[25px] font-[Gilroy-Medium]">
                          {item?.title}
                        </span>
                        <Image src={Arrow} className="" alt={""} />
                      </div>
                      <iframe
                        scrolling="no"
                        className="w-full rounded-2xl h-[300px] mt-4"
                        width={1400}
                        src={item?.link}
                        title="W3Schools Free Online Web Tutorials"
                      ></iframe>
                      <hr className="mt-8" />
                    </a>
                  );
                })}
              </div>
              <div
                className={`bg-black hover:bg-[#1f1f1f] transition duration-150 ease-linear   uppercase w-full row-span-1 px-[20px] items-center h-full flex justify-around rounded-2xl text-white`}
              >
                <a href="https://read.cv/dhaniel" target="_blank">
                  <span className="text-[20px] font-[Gilroy-Light]">
                    Resume
                  </span>
                </a>
                <a href="https://github.com/dhanielcodes" target="_blank">
                  <span className="text-[20px] font-[Gilroy-Light]">
                    Github
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/daniel-adekoya-010810192/"
                  target="_blank"
                >
                  <span className="text-[20px] font-[Gilroy-Light]">
                    Linkedin
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </>
  );
}
