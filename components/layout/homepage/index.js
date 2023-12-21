import React from 'react'
import style from './homepage.module.scss'
import { motion } from 'framer-motion'
import News from './news/news'

export default function Homepage() {
  return (
    <>
      <div className={`${style.main} row`}>
        <div className={`col-lg-6`}>
          <motion.div
            className={`${style.dialog}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <div>
              <h1>您好！我是陳炫志</h1>
              <p>
                歡迎來到我的小站，這裡是我初次嘗試建立的小站
                <br />
                建置這個小站的目的是為了更多練習 React.js
                <br />
                很高興認識你！
              </p>
            </div>
          </motion.div>
        </div>
        <div className="col-lg-6">
          <motion.div
            className={`${style.dialog}`}
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ease: 'easeOut', duration: 1 }}
          >
            <News />
          </motion.div>
        </div>
      </div>
    </>
  )
}
