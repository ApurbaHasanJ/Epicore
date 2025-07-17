"use client"

import Image from "next/image"
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

const cardHoverVariants = {
  initial: { scale: 1 },
  hover: { scale: 1.05, transition: { duration: 0.2 } },
}

export default function BrandingSection() {
  return (
    <section className="py-16 md:py-24 lg:py-32 bg-[#e5d6cb]">
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
            alt="Abstract art"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
        <div className="space-y-8">
          {[
            {
              title: "Branding strategy",
              description:
                "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
            },
            {
              title: "Designing logos",
              description:
                "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
            },
            {
              title: "Brand identity",
              description:
                "Sample text. Click to select the text box. Click again or double click to start editing the text. Excepteur sint occaecat cupidatat non proident.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardHoverVariants}
              whileHover="hover"
              className="bg-white-custom p-6 rounded-lg shadow-md space-y-2"
            >
              <h3 className="text-xl font-bold text-secondary">{item.title}</h3>
              <p className="text-secondary">{item.description}</p>
              {index === 0 && <p className="text-sm text-secondary">Image from Freepik</p>}
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
