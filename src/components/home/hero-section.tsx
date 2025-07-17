"use client"

import Image from "next/image"
import { Button } from "@/src/components/ui/button"
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

export default function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden py-16 md:py-24 lg:py-32 bg-[#e5d6cb]">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 items-center relative z-10"
      >
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary leading-tight">
            We Create Websites
          </h1>
          <p className="text-lg md:text-xl text-secondary max-w-lg">
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt.
          </p>
          <p className="text-sm text-secondary">Image from Freepik</p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Button className="bg-black-custom text-white-custom px-8 py-6 text-lg rounded-none hover:bg-secondary">
              VIEW PORTFOLIO
            </Button>
          </motion.div>
        </div>
        <div className="relative flex justify-center lg:justify-end min-h-[300px] md:min-h-[400px] lg:min-h-[500px]">
          <Image
            src="/placeholder.svg?height=500&width=600"
            width={600}
            height={500}
            alt="Digital devices displaying website designs"
            className="relative z-10 object-contain"
          />
          {/* Abstract shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary transform translate-x-1/4 -translate-y-1/4 z-0" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-gray-300 transform -translate-x-1/4 translate-y-1/4 z-0" />
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gray-400 transform -rotate-45 z-0" />
          <div className="absolute top-1/2 left-1/2 w-40 h-40 bg-gray-200 transform -translate-x-1/2 -translate-y-1/2 rotate-45 opacity-50 z-0" />
        </div>
      </motion.div>
    </section>
  )
}
