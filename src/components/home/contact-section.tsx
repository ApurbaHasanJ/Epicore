"use client"

import Image from "next/image"
import Link from "next/link"
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

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 lg:py-32 bg-[#e5d6cb] text-secondary">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 grid lg:grid-cols-2 gap-8 items-center"
      >
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">CONTACT US</h2>
          <p className="text-lg md:text-xl max-w-lg">
            We are here to meet any business need and to promote your company online!
          </p>
          <div className="space-y-2 text-lg">
            <p>
              <span className="font-semibold">Phone:</span> {"1 (232) 252 55 22"}
            </p>
            <p>
              <span className="font-semibold">Location:</span> {"75 Street Sample, WI 63025"}
            </p>
            <p>
              <span className="font-semibold">Mail:</span>{" "}
              <Link href="mailto:template@sample.com" className="underline">
                template@sample.com
              </Link>
            </p>
          </div>
          <p className="text-sm">Image from Freepik</p>
        </div>
        <div className="relative h-[300px] md:h-[400px] lg:h-[500px] w-full">
          <Image
            src="/placeholder.svg?height=500&width=700"
            width={700}
            height={500}
            alt="Desk with laptop and lamp"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>
      </motion.div>
    </section>
  )
}
