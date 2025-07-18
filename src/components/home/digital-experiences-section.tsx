"use client";

import Image from "next/image";
import { Button, buttonVariants } from "@/src/components/ui/button";
import { motion } from "framer-motion";
import bgImg from "../../assets/craft-bg.jpg";
import Link from "next/link";
import SectionHeader from "../shared/SectionHeader";
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

export default function DigitalExperiencesSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-primary text-secondary">
      {/* Background image and overlay */}
      <Image
        src={bgImg}
        alt="Abstract art"
        fill
        className="object-cover"
        priority
        placeholder="blur"
      />

      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 items-center relative z-10">
        <div className="space-y-4 bg-white-custom p-4 sm:p-8 md:p-12 shadow-lg">
          <SectionHeader
            tittle="Crafting digital experiences"
            desc="Join the elite ranks of sustained value creators"
          />

          {/* <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            
          </h2>
          <p className="text-lg md:text-xl max-w-lg">
            
          </p> */}

          <p className="text-sm text-secondary font-medium">
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
              "transition-all hover:scale-105 duration-300"
            )}>
            CONTACT US
          </Link>
        </div>
      </motion.div>
    </section>
  );
}
