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

export default function PortfolioSection() {
  return (
    <section id="portfolio" className="py-16 md:py-24 lg:py-32 bg-secondary text-white-custom">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 text-center space-y-12"
      >
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Portfolio</h2>
          <p className="text-lg md:text-xl max-w-3xl mx-auto">
            Quam quisque id diam vel quam elementum. Vestibulum lectus mauris ultrices eros in cursus turpis massa
            tincidunt. Pellentesque habitant morbi tristique senectus et netus.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { src: "/placeholder.svg?height=250&width=400", title: "Website Design" },
            { src: "/placeholder.svg?height=250&width=400", title: "Mobile Application" },
            { src: "/placeholder.svg?height=250&width=400", title: "Corporate Design" },
            { src: "/placeholder.svg?height=250&width=400", title: "Mobile Application" },
            { src: "/placeholder.svg?height=250&width=400", title: "Responsive Design" },
            { src: "/placeholder.svg?height=250&width=400", title: "Digital Product" },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardHoverVariants}
              whileHover="hover"
              className="flex flex-col items-center bg-white-custom text-secondary rounded-lg overflow-hidden shadow-md"
            >
              <Image
                src={item.src || "/placeholder.svg"}
                width={400}
                height={250}
                alt={item.title}
                className="w-full h-auto object-cover"
              />
              <h3 className="text-xl font-semibold p-4">{item.title}</h3>
            </motion.div>
          ))}
        </div>
        <p className="text-sm">Images from Freepik</p>
      </motion.div>
    </section>
  )
}
