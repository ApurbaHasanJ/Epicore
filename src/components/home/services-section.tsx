"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Lightbulb, Palette, Code, Monitor } from "lucide-react";
import SectionHeader from "../shared/SectionHeader";

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

const services = [
  {
    icon: Lightbulb,
    title: "STRATEGY",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.",
  },
  {
    icon: Palette,
    title: "BRANDING",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.",
  },
  {
    icon: Code,
    title: "DEVELOPMENT",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.",
  },
  {
    icon: Monitor,
    title: "WEB DESIGN",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#e5d6cb]">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 text-center space-y-12">
        <div className="space-y-4">
          <SectionHeader
            tittle="Epic design and engineering"
            desc="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
        ut aliquip ex ea commodo consequat."
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8">
          {services.map((item, index) => (
            <motion.div
              key={index}
              whileHover="hover"
              className="group hover:scale-[1.03] flex flex-col items-center p-8 space-y-4 rounded-lg shadow-md bg-white transition-all duration-300 cursor-pointer hover:bg-yellow-400">
              <div className="bg-white rounded-full p-4 shadow transition-all duration-200 group-hover:scale-105 group-hover:shadow-lg">
                <item.icon className="size-7 md:size-10 text-secondary group-hover:text-yellow-500" />
              </div>
              <h3 className="text-xl font-semibold text-secondary">
                {item.title}
              </h3>
              <p className="text-secondary text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
