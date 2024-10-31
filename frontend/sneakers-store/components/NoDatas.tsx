"use client"
import { motion } from "framer-motion"
import { Search } from "lucide-react"

export default function NothingFound({ msg }: { msg?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] p-8 bg-gray-50 rounded-lg shadow-inner">
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="text-center"
      >
        <motion.div
          animate={{ rotate: [0, -10, 10, -10, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 3 }}
          className="inline-block mb-6"
        >
          <Search className="w-24 h-24 text-gray-400" />
        </motion.div>
        <motion.h2
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="text-3xl font-bold text-gray-700 mb-2"
        >
          {msg ? msg + " 🤷‍♂️" : "Nichts gefunden 🤷‍♂️"}
        </motion.h2>

      </motion.div>
    </div>
  )
}