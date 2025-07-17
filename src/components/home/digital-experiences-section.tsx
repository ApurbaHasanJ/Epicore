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

export default function DigitalExperiencesSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-primary text-secondary">
      {/* Diagonal stripes background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-black-custom transform -skew-x-12 origin-top-left" />
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-white-custom transform -skew-x-12 origin-top-left translate-x-1/4" />
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-black-custom transform -skew-x-12 origin-top-left translate-x-2/4" />
        <div className="absolute -left-1/4 top-0 w-1/2 h-full bg-white-custom transform -skew-x-12 origin-top-left translate-x-3/4" />
      </div>
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 items-center relative z-10"
      >
        <div className="space-y-6 bg-white-custom p-8 md:p-12 shadow-lg">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">Crafting digital experiences</h2>
          <p className="text-lg md:text-xl max-w-lg">Join the elite ranks of sustained value creators</p>
          <p className="text-sm">Image from Freepik</p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Button className="bg-black-custom text-white-custom px-8 py-4 rounded-none hover:bg-secondary">
              CONTACT US
            </Button>
          </motion.div>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=700"
            width={700}
            height={500}
            alt="Hands working on laptop"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
