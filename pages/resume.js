import ResumeComponent from '@/components/layout/resumeCompo'
import React from 'react'
import { motion } from 'framer-motion'

export default function Resume() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ResumeComponent />
      </motion.div>
    </>
  )
}
