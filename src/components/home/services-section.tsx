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

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 lg:py-32 bg-[#e5d6cb]">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 text-center space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-secondary">Epic design and engineering</h2>
          <p className="text-lg md:text-xl text-secondary max-w-3xl mx-auto">
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: "/placeholder.svg?height=48&width=48",
              title: "STRATEGY",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.",
            },
            {
              icon: "/placeholder.svg?height=48&width=48",
              title: "BRANDING",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.",
            },
            {
              icon: "/placeholder.svg?height=48&width=48",
              title: "DEVELOPMENT",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.",
            },
            {
              icon: "/placeholder.svg?height=48&width=48",
              title: "WEB DESIGN",
              description:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis ultrices.",
              yellowBg: true,
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardHoverVariants}
              whileHover="hover"
              className={`flex flex-col items-center p-8 space-y-4 rounded-lg shadow-md ${item.yellowBg ? "bg-primary" : "bg-white-custom"}`}
            >
              <Image
                src={item.icon || "/placeholder.svg"}
                width={48}
                height={48}
                alt={item.title}
                className="text-secondary"
              />
              <h3 className="text-xl font-semibold text-secondary">{item.title}</h3>
              <p className="text-secondary text-center">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
