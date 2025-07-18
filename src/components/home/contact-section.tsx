"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SectionHeader from "../shared/SectionHeader";
import contactImg from "../../assets/contact-img.jpg";

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
};

export default function ContactSection() {
  return (
    <section
      id="contact"
      className="py-16 md:py-24 lg:py-32 bg-[#e5d6cb] text-secondary">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeInAnimationVariants}
        className="container mx-auto px-4 md:px-8 grid grid-cols-1 md:grid-cols-2">
        <div className="space-y-4 bg-white-custom p-4 sm:p-8 md:p-12 py-10 max-md:shadow-lg text-center place-content-center">
          <SectionHeader
            tittle="Contact Us"
            desc="We are here to meet any business need and to promote your company online!"
          />

          <hr className="bg-[#e5d6cb] h-[1.5px]" />

          <div className="space-y-2 text-lg">
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              <Link href="tel:12322525522" className="underline">
                1 (232) 252 55 22
              </Link>
            </p>
            <p>
              <span className="font-semibold">Location:</span>{" "}
              {"75 Street Sample, WI 63025"}
            </p>
            <p>
              <span className="font-semibold">Mail:</span>{" "}
              <Link href="mailto:template@sample.com" className="underline">
                template@sample.com
              </Link>
            </p>
          </div>

          {/* free pik ref */}
          <p className="text-sm font-medium">
            Image from{" "}
            <Link
              href="https://freepik.com"
              className="underline underline-offset-2">
              Freepik
            </Link>
          </p>
        </div>

        {/* col 2 */}
        <Image
          src={contactImg}
          width={700}
          height={550}
          alt="Desk with laptop and lamp"
          className="w-full h-full object-cover"
          placeholder="blur"
        />
      </motion.div>
    </section>
  );
}
