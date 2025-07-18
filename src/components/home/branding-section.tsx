"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import mocBg from "../../assets/moc-bg.jpg";
import mocImg from "../../assets/moc-img.jpg";

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

const brandingCards = [
  {
    title: "Branding strategy",
    description:
      "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
    showAttribution: true,
  },
  {
    title: "Designing logos",
    description:
      "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
    showAttribution: false,
  },
  {
    title: "Brand identity",
    description:
      "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
    showAttribution: false,
  },
];

export default function BrandingSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 relative bg-[#e5d6cb] overflow-hidden">
      {/* Background image and overlay */}
      <Image
        src={mocBg}
        alt="Abstract art"
        fill
        className="object-cover"
        priority
        placeholder="blur"
      />
      <div className="absolute inset-0 bg-black/30 z-0" />
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 grid md:grid-cols-2 gap-8 items-center relative z-10">
        {/* Left column empty for layout symmetry */}
        <div className="flex flex-col gap-4">
          <Image
            src={mocImg}
            width={600}
            height={250}
            alt="moc img"
            className="w-full h-full object-cover transition-all duration-300 md:hover:scale-105 hover:shadow-lg"
          />
          <div className="-ml-10 max-md:-mt-52 bg-gray-200 text-slate-800 uppercase text-center place-content-center w-full h-full max-w-96 aspect-video transition-all duration-300 hover:scale-105">
            <h3 className="section-header font-normal">Mockup</h3>
            <p className="text-slate-600">Ready to use</p>
          </div>
        </div>
        {/* Right column with cards */}
        <div className="space-y-8">
          {brandingCards.map((item, index) => (
            <div
              key={index}
              className="bg-white-custom p-6 shadow-md space-y-2 transition-transform hover:scale-105 duration-300">
              <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
              <p className="text-secondary">{item.description}</p>
              {/* free pik ref */}
              {item.showAttribution && (
                <p className="text-sm text-secondary font-medium">
                  Image from{" "}
                  <Link
                    href="https://freepik.com"
                    className="underline underline-offset-2">
                    Freepik
                  </Link>
                </p>
              )}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
