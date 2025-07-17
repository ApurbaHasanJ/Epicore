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

export default function ConstructionProjectsSection() {
  return (
    <section id="construction-projects" className="py-16 md:py-24 lg:py-32 bg-primary text-secondary">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 items-center"
      >
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=700"
            width={700}
            height={500}
            alt="Desk with keyboard and calendar"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
            Construction and renovation projects
          </h2>
          <p className="text-lg md:text-xl max-w-lg">
            Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </p>
          <p className="text-sm">Image from Freepik</p>
          <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
            <Button className="bg-white-custom text-secondary px-8 py-4 rounded-none hover:bg-gray-200">
              CONTACT US
            </Button>
          </motion.div>
        </div>
      </motion.div>
    </section>
  )
}
