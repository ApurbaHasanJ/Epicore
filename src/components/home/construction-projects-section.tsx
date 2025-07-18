"use client";

import Image from "next/image";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import bgImg from "../../assets/cons-bg.jpg";
import Link from "next/link";
import { cn } from "@/src/lib/utils";

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

export default function ConstructionProjectsSection() {
  return (
    <section
      id="construction-projects"
      className="py-16 md:py-24 lg:py-32 relative bg-primary text-black md:text-secondary ">
      {/* Diagonal stripes background */}
      <div className="md:hidden absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-black-custom transform -skew-x-12 origin-top-left" />
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-white-custom transform -skew-x-12 origin-top-left translate-x-1/4" />
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-black-custom transform -skew-x-12 origin-top-left translate-x-2/4" />
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-white-custom transform -skew-x-12 origin-top-left translate-x-3/4" />
      </div>

      <Image
        src={bgImg}
        alt="People working and design mockups"
        fill
        className="object-cover max-md:hidden"
        priority
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container grid md:grid-cols-2 items-center relative z-10">
        {/* left hidden col */}
        <div />

        {/* right col */}
        <div className="space-y-6 max-md:space-y-4 max-md:bg-white-custom p-4 sm:p-8 md:p-12 max-md:shadow-lg">
          <h2 className="section-header md:text-secondary">
            Construction and <br /> renovation projects
          </h2>
          <p className="text-sm md:text-lg lg:text-xl max-w-3xl mx-auto">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit
            nullam nunc justo sagittis ultrices. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>

          {/* free pik ref */}
          <p className="text-sm font-medium">
            Image from{" "}
            <Link
              href="https://freepik.com"
              className="underline underline-offset-2">
              Freepik
            </Link>
          </p>

          <Link
            href="#contact"
            className={cn(
              buttonVariants(),
              "hover:scale-105 transition-transform duration-300"
            )}>
            CONTACT US
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
