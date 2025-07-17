"use client"

import { motion } from "framer-motion"

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
}

export default function WhatWeDoSection() {
  return (
    <section id="what-we-do" className="py-16 md:py-24 lg:py-32 bg-black-custom text-white-custom">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 text-center space-y-12"
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">What We Do</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-left">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Strategy.</h3>
            <ul className="space-y-2 text-lg">
              <li>Analytics and Research</li>
              <li>Interactive Workshops</li>
              <li>Brand Strategy</li>
              <li>Content Strategy</li>
              <li>Digital Strategy</li>
              <li>Conversion Rate Optimization</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Design.</h3>
            <ul className="space-y-2 text-lg">
              <li>Creative Direction</li>
              <li>Brand Guides</li>
              <li>Prototypes</li>
              <li className="underline">UI / UX & Web Design</li>
              <li>Visual Asset Creation</li>
              <li>Motion Design</li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Development.</h3>
            <ul className="space-y-2 text-lg">
              <li>System Architecture Design</li>
              <li>Full-Stack Development</li>
              <li className="underline">3rd Party Integrations</li>
              <li>Performance Optimization</li>
              <li>WordPress Development</li>
              <li>Shopify Development</li>
            </ul>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
