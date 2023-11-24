import React from 'react'
import style from './homepage.module.scss'
import Button from '@mui/material/Button'

export default function Homepage() {
  return (
    <>
      <div className={style.main}>
        <div className="d-flex h-100 align-items-center container">
          <div className={`${style.dialog} col-5`}>
            <div>
              <h1>您好！我是陳炫志</h1>
              <p>
                歡迎來到我的小站，這裡是我初次嘗試建立的小站
                <br />
                建置這個小站的目的是為了更多練習 React.js
                <br/>
                很高興認識你！
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
