import ProjectComponents from '@/components/layout/project'
import React from 'react'
import { motion } from 'framer-motion'

export default function Project() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <ProjectComponents />
      </motion.div>
    </>
  )
}
