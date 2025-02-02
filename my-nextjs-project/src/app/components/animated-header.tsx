"use client"

import { motion } from "framer-motion"

export default function AnimatedHeader() {
  return (
    <motion.h1
      className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-purple-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      Abdul Wahid Chohan
    </motion.h1>
  )
}

