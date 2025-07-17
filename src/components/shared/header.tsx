"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { cn } from "@/src/lib/utils"
import { buttonVariants } from "@/src/components/ui/button"

const COMPANY_NAME = "Epicore"

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#construction-projects" },
]

export default function Header() {
  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white backdrop-blur-sm border-b border-secondary/10 shadow-sm"
    >
      <div className="container flex items-center justify-between py-4">
        <div className="font-logo text-secondary font-bold text-lg md:text-xl xl:text-2xl tracking-wider">
          {COMPANY_NAME}
        </div>

        {/* Desktop nav links */}
        <div className="hidden md:flex gap-6">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              className="text-secondary hover:text-primary font-medium transition-colors"
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              {link.label}
            </motion.a>
          ))}
        </div>

        <Link href="#contact" className={cn(buttonVariants(), "bg-black-custom text-white-custom hover:bg-secondary")}>
          Contact
        </Link>
      </div>
    </motion.header>
  )
}
