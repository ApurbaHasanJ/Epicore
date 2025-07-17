"use client";

import Image from "next/image";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import Link from "next/link";
import { cn } from "@/src/lib/utils";
import heroImg from "../../assets/hero-img.jpg";

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

const ImageDesign = () => (
  <div className="xl:hidden block pb-7">
    {/* Decorative badge */}
    <span className="absolute top-5 left-5 bg-gradient-to-r from-primary to-black text-white text-xs font-semibold px-4 py-1 rounded-full shadow-md z-10">
      Featured
    </span>
    {/* Image */}
    <Image
      src={heroImg}
      width={320}
      height={220}
      alt="Digital devices displaying website designs"
      className="w-full h-full object-contain rounded-xl overflow-hidden"
      placeholder="blur"
    />
  </div>
);

export default function HeroSection() {
  return (
    <section
      id="home"
      className="bg-[#e5d6cb] flex items-center justify-center">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container relative min-h-svh flex max-xl:flex-col items-center justify-between gap-8 z-10 pt-16 lg:pt-28">
        {/* left col */}
        <div className="xl:max-w-4xl relative w-full bg-white p-8 py-16">
          {/*design for lg and below */}
          <ImageDesign />

          <div className="space-y-7 max-w-lg">
            <h1 className="section-header">We Create Websites</h1>
            <p className="text-lg md:text-xl text-secondary">
              Duis aute irure dolor in reprehenderit in voluptate velit esse
              cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
              cupidatat non proident, sunt in culpa qui officia deserunt.
            </p>
            <p className="text-sm text-secondary font-medium">
              Image from{" "}
              <Link
                href="https://freepik.com"
                className="underline underline-offset-2">
                Freepik
              </Link>
            </p>
            <Link
              href="#portfolio"
              className={cn(buttonVariants({ size: "lg" }))}>
              VIEW PORTFOLIO
            </Link>
          </div>
        </div>

        {/* right cols for xl and up */}
        <div className="hidden xl:block">
          {/* Abstract shapes */}
          <div className="absolute z-0 right-8 top-2/4 transform -translate-y-[60%] w-[450px] h-[600px] bg-primary" />
          <div className="bg-gray-100 absolute z-10 right-52 top-1/2 transform -translate-y-[60%] w-[450px] h-[450px]" />
          <div className="absolute z-10 right-14 top-1/2 transform -translate-y-[82%] w-[540px] h-[400px]">
            <Image
              src={heroImg}
              width={540}
              height={400}
              alt="Digital devices displaying website designs"
              className="w-full h-full"
              placeholder="blur"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
