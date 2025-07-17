"use client"

import { motion } from "framer-motion"

export default function Footer() {
  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.5 }}
      className="py-8 bg-secondary text-white-custom text-center px-4 md:px-8"
    >
      <p className="text-sm">Sample text. Click to select the Text Element.</p>
    </motion.footer>
  )
}
