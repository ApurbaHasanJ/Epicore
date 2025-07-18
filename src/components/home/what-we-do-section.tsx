"use client";

import { motion } from "framer-motion";

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

const whatWeDoData = [
  {
    title: "Strategy.",
    items: [
      "Analytics and Research",
      "Interactive Workshops",
      "Brand Strategy",
      "Content Strategy",
      "Digital Strategy",
      "Conversion Rate Optimization",
    ],
  },
  {
    title: "Design.",
    items: [
      "Creative Direction",
      "Brand Guides",
      "Prototypes",
      "UI / UX & Web Design",
      "Visual Asset Creation",
      "Motion Design",
    ],
  },
  {
    title: "Development.",
    items: [
      "System Architecture Design",
      "Full-Stack Development",
      "3rd Party Integrations",
      "Performance Optimization",
      "WordPress Development",
      "Shopify Development",
    ],
  },
];

export default function WhatWeDoSection() {
  return (
    <section
      id="what-we-do"
      className="py-16 md:py-24 lg:py-32 bg-black-custom text-white-custom">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 text-center space-y-12">
        <h2 className="section-header text-primary md:pb-4 lg:pb-10">
          What We Do
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 text-left">
          {whatWeDoData.map((col, i) => (
            <div className="space-y-6" key={col.title}>
              <h3 className="text-lg md:text-2xl text-primary/85">
                {col.title}
              </h3>
              <ul className="space-y-2 text-lg">
                {col.items.map((item) => (
                  <li
                    key={item}
                    className="text-slate-50/60 max-sm:text-sm hover:underline hover:underline-offset-2 transition-all">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
