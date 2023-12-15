import AboutComponent from '@/components/layout/aboutmeCopo/intro-card'
import { motion } from 'framer-motion'

export default function AboutMe() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <AboutComponent />
      </motion.div>
    </>
  )
}
