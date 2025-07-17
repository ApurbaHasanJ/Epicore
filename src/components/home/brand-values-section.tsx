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

export default function BrandValuesSection() {
  return (
    <section className="relative py-16 md:py-24 lg:py-32 bg-[#e5d6cb]">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 items-center"
      >
        <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full">
          <Image
            src="/placeholder.svg?height=600&width=800"
            width={800}
            height={600}
            alt="People working and design mockups"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-black-custom text-white-custom p-8 md:p-12 max-w-md text-center space-y-4 shadow-lg"
            >
              <h2 className="text-3xl md:text-4xl font-bold">Brand Values</h2>
              <p className="text-lg">
                Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis
                ultrices.
              </p>
              <p className="text-sm">Images from Freepik</p>
              <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.2 }}>
                <Button className="bg-white-custom text-black-custom px-8 py-4 rounded-none hover:bg-gray-200">
                  LEARN MORE
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
        <div className="hidden lg:block" />
      </motion.div>
    </section>
  )
}
