import Homepage from '@/components/layout/homepage'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <Homepage />
      </motion.div>
    </>
  )
}
