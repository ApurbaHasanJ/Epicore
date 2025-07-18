"use client";

import Image from "next/image";
import { Button } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import img1 from "../../assets/brand-values/brand-values1.jpg";
import img2 from "../../assets/brand-values/brand-values2.jpg";
import img3 from "../../assets/brand-values/brand-values3.jpg";
import SectionHeader from "../shared/SectionHeader";
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

export default function BrandValuesSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#e5d6cb]">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container md:grid md:grid-cols-2 gap-3 items-center">
        <div className="md:flex flex-col gap-3 hidden">
          <Image
            src={img3}
            width={800}
            height={600}
            alt="People working and design mockups"
            className="md:pl-14"
          />
          <Image
            src={img1}
            width={800}
            height={600}
            alt="People working and design mockups"
            className=""
          />
        </div>

        <div className="hidden md:block">
          <Image
            src={img2}
            width={800}
            height={600}
            alt="People working and design mockups"
            className=""
          />
        </div>
        {/* content */}
        <div className="md:absolute md:inset-0 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative text-white-custom sm:p-8 p-5 lg:p-12 md:max-w-md w-full text-center space-y-4 shadow-lg md:bg-black-custom bg-black/85 overflow-hidden">
            {/* Background image for mobile only */}
            <div className="absolute inset-0 w-full h-full md:hidden">
              <Image
                src={img2}
                alt="People working and design mockups"
                fill
                className="object-cover"
                priority
              />
              <div
                className="absolute inset-0 bg-black/80"
                aria-hidden="true"></div>
            </div>
            <div className="relative z-10 space-y-4">
              <h2 className="section-header lg:text-4xl text-white">
                Brand Values
              </h2>
              <p className="text-sm md:text-lg text-slate-300">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing
                elit nullam nunc justo sagittis ultrices.
              </p>

              <p className="text-sm text-slate-300 font-medium">
                Image from{" "}
                <Link
                  href="https://freepik.com"
                  className="underline underline-offset-2">
                  Freepik
                </Link>
              </p>

              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}>
                <Button variant="outline" className="">
                  LEARN MORE
                </Button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
