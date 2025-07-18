"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import webDesignImg from "../../assets/portfolio/web-design.jpg";
import responsiveDesignImg from "../../assets/portfolio/responsive-design.jpg";
import mobileAppImg from "../../assets/portfolio/mobile-design-1.jpg";
import mobileAppImg2 from "../../assets/portfolio/mobile-design-2.jpg";
import corporateImg from "../../assets/portfolio/corporate.jpg";
import digitalProductImg from "../../assets/portfolio/digital-product.jpg";
import Link from "next/link";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.1,
      duration: 0.6,
    },
  },
};

const portfolioItems = [
  {
    src: webDesignImg,
    title: "Website Design",
  },
  {
    src: mobileAppImg2,
    title: "Mobile Application",
  },
  {
    src: corporateImg,
    title: "Corporate Design",
  },
  {
    src: mobileAppImg,
    title: "Mobile Application",
  },
  {
    src: responsiveDesignImg,
    title: "Responsive Design",
  },
  {
    src: digitalProductImg,
    title: "Digital Product",
  },
];

export default function PortfolioSection() {
  return (
    <section
      id="portfolio"
      className="py-16 md:py-24 lg:py-32 bg-black text-white-custom">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container text-center space-y-12">
        <div className="space-y-4">
          <SectionHeader
            dark={true}
            tittle="Portfolio"
            desc="Quam quisque id diam vel quam elementum. Vestibulum lectus mauris ultrices eros in cursus turpis massa
            tincidunt. Pellentesque habitant morbi tristique senectus et netus."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8">
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              className="group hover:scale-[1.03] flex flex-col items-center bg-white-custom text-secondary rounded-lg overflow-hidden shadow-sm transition-all duration-300 cursor-pointer hover:bg-yellow-400">
              <div className="w-full h-full flex justify-center items-center bg-white rounded-b-none rounded-t-lg overflow-hidden">
                <Image
                  src={item.src}
                  width={250}
                  height={600}
                  alt={item.title}
                  className="w-full h-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg"
                />
              </div>
              <h3 className="text-sm sm:text-base md:text-xl font-semibold p-4 text-secondary">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* free pik ref */}
        <p className="text-sm text-slate-300 font-medium">
          Image from{" "}
          <Link
            href="https://freepik.com"
            className="underline underline-offset-2">
            Freepik
          </Link>
        </p>
      </motion.div>
    </section>
  );
}
